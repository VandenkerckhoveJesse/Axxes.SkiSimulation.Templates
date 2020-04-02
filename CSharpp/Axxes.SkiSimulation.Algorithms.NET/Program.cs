using Axxes.SkiSimulation.Algorithms.NET;
using Grpc.Net.Client;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Axxes.SkiSimulation.Algorithms.NET
{
    public static class Program
    {
        private static async Task Main(string[] args)
        {
            var httpClientHandler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback =
                    HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
            };
            var httpClient = new HttpClient(httpClientHandler);
            var channel = GrpcChannel.ForAddress("https://engine:5001",
                new GrpcChannelOptions { HttpClient = httpClient });
            var client = new EngineManagement.EngineManagementClient(channel);
            var reply = await client.StartStimulationAsync(new Empty());
            var repliedMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
            while (true)
            {
                reply = await client.PerformActionAsync(new ActionRequest
                {
                    Action = Algorithm.Execute(repliedMatrix)
                });
                repliedMatrix = JsonConvert.DeserializeObject<int[,]>(reply.Matrix);
            }
        }
    }
}