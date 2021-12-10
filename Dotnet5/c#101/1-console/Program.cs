using System;
using System.Collections.Generic;
using System.Collections;

namespace _1_console
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // string deneme=Console.ReadLine();
            // Console.WriteLine(!string.IsNullOrEmpty(deneme));
            // Console.WriteLine(true & false);
            // Console.WriteLine("atakan"=="yeniceli");
            // Console.WriteLine(3<5);
            // int sayi=3;
            // Console.WriteLine(++sayi);
            // Console.WriteLine(sayi++);
            // Console.WriteLine(sayi+"atakan");
            // Console.WriteLine(sayi.ToString()+"atakan");

            ListEx();

            ArrayEx();
            
        }
         static void Deneme(){
            Console.WriteLine("deneme method çalıştı");
        }
        static void ListEx(){
            List<int> myList=new List<int>();
            for(int i=0;i<1000;i++){
                Random rnd=new Random();
             myList.Add(rnd.Next(0,int.MaxValue));
            }
            myList.ForEach(item => Console.WriteLine(item));
        }
        static void ArrayEx(){
            ArrayList myArray=new ArrayList();
            myArray.Add(true);
            myArray.Add(1);
            myArray.Add('a');
        }
        enum myEnum{
            pazartesi,
            sali,
            carsamba,
            persembe,
            cuma,
            cumartesi,
            pazar
        }
    }
}
