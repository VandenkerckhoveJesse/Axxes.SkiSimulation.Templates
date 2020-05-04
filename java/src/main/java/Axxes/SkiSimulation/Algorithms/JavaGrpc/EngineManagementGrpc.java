package Axxes.SkiSimulation.Algorithms.JavaGrpc;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 *Engine instead of EngineManagement
 * </pre>
 */
public final class EngineManagementGrpc {

  private EngineManagementGrpc() {}

  public static final String SERVICE_NAME = "simulation.EngineManagement";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty,
      Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getStartStimulationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StartStimulation",
      requestType = Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty.class,
      responseType = Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty,
      Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getStartStimulationMethod() {
    io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty, Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getStartStimulationMethod;
    if ((getStartStimulationMethod = EngineManagementGrpc.getStartStimulationMethod) == null) {
      synchronized (EngineManagementGrpc.class) {
        if ((getStartStimulationMethod = EngineManagementGrpc.getStartStimulationMethod) == null) {
          EngineManagementGrpc.getStartStimulationMethod = getStartStimulationMethod = 
              io.grpc.MethodDescriptor.<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty, Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "simulation.EngineManagement", "StartStimulation"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply.getDefaultInstance()))
                  .setSchemaDescriptor(new EngineManagementMethodDescriptorSupplier("StartStimulation"))
                  .build();
          }
        }
     }
     return getStartStimulationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest,
      Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getPerformActionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PerformAction",
      requestType = Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest.class,
      responseType = Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest,
      Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getPerformActionMethod() {
    io.grpc.MethodDescriptor<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest, Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> getPerformActionMethod;
    if ((getPerformActionMethod = EngineManagementGrpc.getPerformActionMethod) == null) {
      synchronized (EngineManagementGrpc.class) {
        if ((getPerformActionMethod = EngineManagementGrpc.getPerformActionMethod) == null) {
          EngineManagementGrpc.getPerformActionMethod = getPerformActionMethod = 
              io.grpc.MethodDescriptor.<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest, Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "simulation.EngineManagement", "PerformAction"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply.getDefaultInstance()))
                  .setSchemaDescriptor(new EngineManagementMethodDescriptorSupplier("PerformAction"))
                  .build();
          }
        }
     }
     return getPerformActionMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static EngineManagementStub newStub(io.grpc.Channel channel) {
    return new EngineManagementStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static EngineManagementBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new EngineManagementBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static EngineManagementFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new EngineManagementFutureStub(channel);
  }

  /**
   * <pre>
   *Engine instead of EngineManagement
   * </pre>
   */
  public static abstract class EngineManagementImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     *Client connection van maken
     * </pre>
     */
    public void startStimulation(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty request,
        io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> responseObserver) {
      asyncUnimplementedUnaryCall(getStartStimulationMethod(), responseObserver);
    }

    /**
     * <pre>
     *Opzich wel oke
     * </pre>
     */
    public void performAction(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest request,
        io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> responseObserver) {
      asyncUnimplementedUnaryCall(getPerformActionMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getStartStimulationMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty,
                Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>(
                  this, METHODID_START_STIMULATION)))
          .addMethod(
            getPerformActionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest,
                Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>(
                  this, METHODID_PERFORM_ACTION)))
          .build();
    }
  }

  /**
   * <pre>
   *Engine instead of EngineManagement
   * </pre>
   */
  public static final class EngineManagementStub extends io.grpc.stub.AbstractStub<EngineManagementStub> {
    private EngineManagementStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EngineManagementStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EngineManagementStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EngineManagementStub(channel, callOptions);
    }

    /**
     * <pre>
     *Client connection van maken
     * </pre>
     */
    public void startStimulation(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty request,
        io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getStartStimulationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *Opzich wel oke
     * </pre>
     */
    public void performAction(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest request,
        io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPerformActionMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   *Engine instead of EngineManagement
   * </pre>
   */
  public static final class EngineManagementBlockingStub extends io.grpc.stub.AbstractStub<EngineManagementBlockingStub> {
    private EngineManagementBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EngineManagementBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EngineManagementBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EngineManagementBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     *Client connection van maken
     * </pre>
     */
    public Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply startStimulation(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty request) {
      return blockingUnaryCall(
          getChannel(), getStartStimulationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *Opzich wel oke
     * </pre>
     */
    public Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply performAction(Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest request) {
      return blockingUnaryCall(
          getChannel(), getPerformActionMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   *Engine instead of EngineManagement
   * </pre>
   */
  public static final class EngineManagementFutureStub extends io.grpc.stub.AbstractStub<EngineManagementFutureStub> {
    private EngineManagementFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EngineManagementFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EngineManagementFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EngineManagementFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     *Client connection van maken
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> startStimulation(
        Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getStartStimulationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *Opzich wel oke
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply> performAction(
        Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPerformActionMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_START_STIMULATION = 0;
  private static final int METHODID_PERFORM_ACTION = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final EngineManagementImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(EngineManagementImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_START_STIMULATION:
          serviceImpl.startStimulation((Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.Empty) request,
              (io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>) responseObserver);
          break;
        case METHODID_PERFORM_ACTION:
          serviceImpl.performAction((Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ActionRequest) request,
              (io.grpc.stub.StreamObserver<Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.ViewportReply>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class EngineManagementBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    EngineManagementBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return Axxes.SkiSimulation.Algorithms.JavaGrpc.Simulation.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("EngineManagement");
    }
  }

  private static final class EngineManagementFileDescriptorSupplier
      extends EngineManagementBaseDescriptorSupplier {
    EngineManagementFileDescriptorSupplier() {}
  }

  private static final class EngineManagementMethodDescriptorSupplier
      extends EngineManagementBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    EngineManagementMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (EngineManagementGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new EngineManagementFileDescriptorSupplier())
              .addMethod(getStartStimulationMethod())
              .addMethod(getPerformActionMethod())
              .build();
        }
      }
    }
    return result;
  }
}
