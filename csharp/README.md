# Axxes.SkiSimulation in C#
Concratsiolations, you chose C#!

## Requirements
* Microsoft .NET Core 3.1

## Start writing your algorithm
Open de algorithm.sln with the IDE you like. 
Then go to the Algorithm.cs file to write your code.  
In this class, you will find a method called "Execute".  
This method will be called each time the engine expects a new action.  
The action that will be returned can be based on the incoming viewport. 

### Viewport
The viewport is a two-dimensional array that represents the vision of de skiër. The actions can be based on this viewport.

The size of de viewport depends on the track but is always a square. 
Horizontally de skiër will always be in the middle of the viewport.
Vertically the skiër will be on the second row. 
Example when returning "Nothing" with a dummy viewport:
| Initial view ->  | Second view ->   | Third view ->    | Last view        |
| :--------------: |:----------------:| :---------------:| :---------------:|
| [[2, 2, 2, 2, 2],| [[2, 0, 0, 0, 0],| [[2, 0, 0, 0, 0],| [[2, 0, 0, 0, 1],|
| [2, 0, 9, 0, 0], | [2, 0, 9, 0, 0], | [2, 0, 9, 0, 1], | [2, 0, 9, 1, 1], |
| [2, 0, 0, 0, 0], | [2, 0, 0, 0, 1], | [2, 0, 0, 1, 1], | [2, 2, 2, 2, 2], |
| [2, 0, 0, 0, 1], | [2, 0, 0, 1, 1], | [2, 2, 2, 2, 2], | [2, 2, 2, 2, 2], |
| [2, 0, 0, 1, 1]] | [2, 2, 2, 2, 2]] | [2, 2, 2, 2, 2], | [2, 2, 2, 2, 2], |


#### Legend:
* 0 = just snow
* 1 = obstacle
* 2 = outside the track
* 9 = actual possition of the skiër

### Possible actions
There are three possible actions. The first one is "Nothing" if you give this action the skiër will just go down. The other two are "Right" and "Left".

### Example of an algorithm
In the image beneath you find an example of a possible algorithm.
With conditional statements, it is possible to calculate what the best next action is.  

![Example of algorithm](/img/Example_Csharp.PNG)

## Run you algorithm
When you are ready with writing the best algorithm ever, you can test it.
Just run **Docker-compose up** and you will find de result in the web folder.  
*Make sure the docker has access to your C:. You can find how to do it in the root README.*

## LETS GO!