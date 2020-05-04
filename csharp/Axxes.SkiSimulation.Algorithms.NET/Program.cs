using Grpc.Net.Client;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Threading;
using Grpc.Core;

namespace Axxes.SkiSimulation.Algorithms.NET
{
    /*You are not allowed to change anything in the program.cs file. 
    This file will set up the gRPC connection with the engine. 
    Changing anything here could break your application 
    */
    public static class Program
    { 
        private static async Task Main(string[] args)
        {
            Console.WriteLine("Waiting");
            await Task.Delay(TimeSpan.FromSeconds(2));
            Console.WriteLine("Requesting");
            var httpClientHandler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback =
                    HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
            };
            var httpClient = new HttpClient(httpClientHandler);
            var channel = GrpcChannel.ForAddress("https://engine:5001",
                new GrpcChannelOptions { HttpClient = httpClient });
            var client = new EngineManagement.EngineManagementClient(channel);

            int[,] lastMatrix;
            string simulationState = "Starting";

            using (var call = client.StartStimulationAsync(new Empty()))
            {
                var reply = await call;
                var metadata = call.GetTrailers();
                simulationState = GetSimulationStateFromMetaData(metadata);
                lastMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
            }
            



            //todo change these strings to a enum (take a look at the possibilities of this)
            while (simulationState != "Ended")
            {
                using (var call = client.PerformActionAsync(new ActionRequest
                {
                    Action = Algorithm.Execute(lastMatrix)
                }))
                {
                    var reply = await call;
                    var metadata = call.GetTrailers();
                    simulationState = GetSimulationStateFromMetaData(metadata);
                    lastMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
                }
                
            }
        }

        private static string GetSimulationStateFromMetaData(Metadata metadata)
        {
            return metadata
                .Where(entry => entry.Key == "simulationstate")
                .FirstOrDefault()
                .Value;
        }

       
    }
}