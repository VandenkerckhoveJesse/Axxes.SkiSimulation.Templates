# Axxes.SkiSimulation in C#
Concratsiolations, you chose C#!

## Requirements
* [Microsoft .NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)
## Start writing your algorithm
Open de **algorithm.sln** with the IDE you like. 
Then go to the **Algorithm.cs** file to write your code.  
In this class, you will find a method called **Execute**.  
This method will be called each time the engine expects a new action.  
The action that will be returned can be based on the incoming viewport. 

### Viewport
The viewport is a **two-dimensional array** that represents the vision of de skier. The actions can be based on this viewport.

The size of de viewport depends on the track but is always a square.   
Horizontally de skier will always be in the middle of the viewport.  
Vertically the skier will be on the second row.  

Example when returning `Nothing` with a dummy viewport:

### Initial view

```
[[2, 2, 2, 2, 2],
 [2, 0, 9, 0, 0],
 [2, 0, 0, 0, 0],
 [2, 0, 0, 0, 1], 
 [2, 0, 0, 1, 1]]
```

### Second view

```
[[2, 0, 0, 0, 0],
 [2, 0, 9, 0, 0],
 [2, 0, 0, 0, 1],
 [2, 0, 0, 1, 1],
 [2, 2, 2, 2, 2]]
```

### Third view

```
[[2, 0, 0, 0, 0],
 [2, 0, 9, 0, 1],
 [2, 0, 0, 1, 1], 
 [2, 2, 2, 2, 2], 
 [2, 2, 2, 2, 2]]
```

### Last view

```
[[2, 0, 0, 0, 1],
 [2, 0, 9, 1, 1],
 [2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2]]
```

#### Legend:
* 0 = just snow
* 1 = obstacle
* 2 = outside the track
* 9 = actual possition of the skier

### Possible actions
There are three possible actions. The first one is **Nothing** if you give this action the skier will just go down.  
The other two are **Right** and **Left**. When using those two commands you won't just go left of right.   As there is gravity, de skier will go **diagonally** down to the direction you point.

### Example of an algorithm
In the image beneath you find an example of a possible algorithm.  
With conditional statements, it is possible to calculate what the best next action is.  

![Example of algorithm](/img/Example_Csharp.PNG)

## Run you algorithm
When you are ready with writing the best algorithm ever, you can test it.  
Just run **Docker-compose up** and you will find de result in the **web folder**.  
*Make sure the docker has access to your C:. You can find how to do it in the root README.*

## LETS GO!