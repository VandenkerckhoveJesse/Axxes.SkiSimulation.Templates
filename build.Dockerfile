FROM mcr.microsoft.com/dotnet/core/sdk:3.1
SHELL ["pwsh", "-command"]
WORKDIR /source

COPY ski-simulation.sln ./
COPY .config ./.config
COPY src ./src
RUN dotnet tool restore
RUN dotnet format --check --dry-run
RUN dotnet build