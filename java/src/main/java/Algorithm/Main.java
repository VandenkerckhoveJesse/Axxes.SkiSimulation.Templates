package Algorithm;

import Axxes.SkiSimulation.Algorithms.JavaGrpc.EngineManagementGrpc;
import Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation;
import Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest;
import io.grpc.Channel;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

public class Main {
    private static EngineManagementGrpc.EngineManagementBlockingStub engineManagementBlockingStub;
    private static Object asyncStub;

    public static void Main(String[] args){

        //todo: planetext mss securen
        ManagedChannelBuilder managedChannelBuilder = ManagedChannelBuilder.forAddress("https://engine", 5001).usePlaintext();
        Channel channel = managedChannelBuilder.build();
        EngineManagementGrpc.EngineManagementBlockingStub engineManagementBlockingStub = EngineManagementGrpc.newBlockingStub(channel);
        //asyncStub = EngineManagementGrpc.newStub(channel);
        //functie
        int[][] lastMatrix = null;
        String simulationState = "Starting";
        ActionRequest action = ActionRequest.newBuilder().build();
        action.Action = Simulation.Action.Nothing;
        //
        while (true){
            engineManagementBlockingStub.performAction(ActionRequest.newBuilder(action).getDefaultInstanceForType());
        }
    }
}
