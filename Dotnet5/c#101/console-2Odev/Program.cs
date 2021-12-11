using System;
using System.Collections.Generic;
using System.Linq;
namespace console_2Odev
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> myNumberArray= new List<int>();
            NumberCollectionAccu(ref myNumberArray);
            Collection1(myNumberArray);
            Collection2(myNumberArray);
            LetterCollectionAccu();

        }

        static void NumberCollectionAccu(ref List<int> rep){
            for(int i=0; i<20;){
                Console.WriteLine("Lütfen Pozitif Bir Tam Sayi Giriniz.");
                try{
                    int res=Convert.ToInt32(Console.ReadLine());
                    if(res >0 ){
                        rep.Add(res);
                        i++;
                    }
                }
                catch{}
            }
        }
        static void Collection1(List<int> rep){
            List<int> myPrimeNumber=new List<int>();
            List<int> myNonPrimeNumber=new List<int>();
            foreach(var item in rep){
                int count=0;
                for(int i=1; i<=item; i++){
                    if(item%i == 0){
                        count++;
                    }
                }
                if(count == 2)myPrimeNumber.Add(item);
                else myNonPrimeNumber.Add(item);
            }

            myNonPrimeNumber.Sort();
            myNonPrimeNumber.Reverse();
            Console.WriteLine($"Asal olmayan eleman sayısı: {myNonPrimeNumber.Count}  Ortalama: {myNonPrimeNumber.Average()}");

            myPrimeNumber.Sort();
            myPrimeNumber.Reverse();
        }
        static void Collection2(List<int> rep){
            List<int> biggest=new List<int>();
            List<int> smallest=new List<int>();
            rep.Sort();
            smallest.AddRange(rep.Take(3).ToArray());

            rep.Reverse();
            biggest.AddRange(rep.Take(3).ToArray());

            Console.WriteLine($"En Küçük Sayıların Ortalaması: {smallest.Average()} En Büyük Sayıların Ortalaması: {biggest.Average()}  Ortalamaların Toplamları: {smallest.Average()+biggest.Average()}");
        }
        
        static void LetterCollectionAccu(){
            List<char> myVowelArray=new List<char>(){'a','e','i','o','u'};
            List<char> vowelDetec=new List<char>();

            Console.WriteLine("Lütfen Bir Cümle Gİriniz:");
            string rep=Console.ReadLine();
            for(int i=0; i<rep.Length; i++){
               if(myVowelArray.Contains(rep[i]))vowelDetec.Add(rep[i]);
            }
            vowelDetec.ForEach(item=>Console.WriteLine(item));
        }
    }
}
