using System;
using System.Collections.Generic;
using System.Linq;
namespace console_1Odev
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lütfen Girmek İstediğiniz Sayi Adedini Giriniz.");
            int count=Convert.ToInt32(Console.ReadLine());
            List<int> myArray=new List<int>();
            for(int i=0; i <count;){
                Console.WriteLine("Lütfen Pozitif bir sayi giriniz.");
                try{
                    int res=Convert.ToInt32(Console.ReadLine());
                    if(res>0){
                        myArray.Add(res);
                        i++;
                    }
                }
                catch{}
            }
            myArray.ForEach(item => Console.Write(item%2 == 0 ? item.ToString()+'-' :null));
        }
    }   
}
