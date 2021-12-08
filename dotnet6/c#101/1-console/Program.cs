using System;

namespace _1_console
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string deneme=Console.ReadLine();
            Console.WriteLine(!string.IsNullOrEmpty(deneme));
        }
    }
}
