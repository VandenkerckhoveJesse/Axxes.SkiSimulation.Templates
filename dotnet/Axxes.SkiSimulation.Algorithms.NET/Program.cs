using Axxes.SkiSimulation.Algorithms.NET;
using Grpc.Net.Client;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Axxes.SkiSimulation.Algorithms.NET
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Client started");
            var httpClientHandler = new HttpClientHandler();
            httpClientHandler.ServerCertificateCustomValidationCallback =
                HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;
            var httpClient = new HttpClient(httpClientHandler);
            var channel = GrpcChannel.ForAddress("https://engine:5001",
                new GrpcChannelOptions { HttpClient = httpClient });
            var client = new EngineManagement.EngineManagementClient(channel);
            var reply = await client.StartStimulationAsync(new Empty());
            Console.WriteLine("Start position: " + reply.Matrix);
            var repliedMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
            var collision = false;
            while (true)
            {
                reply = await client.PerformActionAsync(new ActionRequest
                {
                    Action = Algorithm.Execute(repliedMatrix)
                });
                repliedMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
                Console.WriteLine(reply.Matrix);
                //Better this is in the server :) I know!
                if (repliedMatrix[2, 2] != 0)
                {
                    collision = true;
                }
            }
            //Better this is in the server :) I know!
            Console.WriteLine(repliedMatrix[2, 2] == 2 ? "You finished the track!" : "You have been been collided!");
        }
    }
}