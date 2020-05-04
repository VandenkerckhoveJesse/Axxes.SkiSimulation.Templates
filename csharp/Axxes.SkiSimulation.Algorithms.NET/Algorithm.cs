namespace Axxes.SkiSimulation.Algorithms.NET
{
    public static class Algorithm
    {
        //In the "Execute" method you can write your algorithm
        public static Action Execute(int[,] matrix)
        {
            if (matrix[2, 2] != 1 && matrix[3, 2] != 1 && matrix[4, 2] != 1)
            {
                return Action.Nothing;
            }
            else if (matrix[2, 3] != 0 || matrix[3, 3] != 0 || matrix[2, 4] != 0 || matrix[3, 4] != 0 || matrix[4, 3] != 0 || matrix[4, 4] != 0 && matrix[2, 3] != 0)
            {
                return Action.Left;
            }
            else if (matrix[2, 0] != 0 || matrix[3, 0] != 0 || matrix[2, 1] != 0 || matrix[3, 1] != 0 || matrix[4, 1] != 0 || matrix[4, 0] != 0 && matrix[2, 1] != 0)
            {
                return Action.Right;
            }
            else
            {
                return Action.Nothing;
            }
        }
    }
}