FROM mcr.microsoft.com/dotnet/core/sdk:3.1.200 AS build-env
WORKDIR /app
COPY Protos/* ./Protos/
COPY * ./
RUN dir
RUN dotnet build
ENTRYPOINT ["dotnet", "bin/Debug/netcoreapp3.1/Axxes.SkiSimulation.Algorithms.NET.dll"]