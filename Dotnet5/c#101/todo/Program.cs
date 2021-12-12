using System;
using System.Collections.Generic;
using System.Linq;
namespace todo
{
    class Program
    {
        static Person person=null;
        static List<Person> personList=new List<Person>();
        static void Main(string[] args)
        {
            personList.Add(new Person("1","Isim","Soyısım",new Card("denemetitle","denemecontents",SizeEnum.L),LineEnum.Todo));
            personList.Add(new Person("2","Isim","Soyısım",new Card("denemetitle","denemecontents",SizeEnum.L),LineEnum.Todo));  
            for(;;){
                Console.WriteLine("******************************************");
                Console.WriteLine("Lütfen Yapmak İstediğiniz İşlemi Seçiniz:");
                Console.WriteLine("1-)Board Listelemek\n2-)Board'a Kart Eklemek\n3-)Board'dan kart Silmek\n4-)Kart Taşımak");
                string choice=Console.ReadLine();
                switch (choice){
                    
                    case "1":
                    GetTodo();
                    GetInProgress();
                    GetDone();
                    break;

                    case "2":
                    newPerson();
                    break;

                    case "3":
                    CardDelete();
                    break;

                    case "4":
                    CardMove();
                    break;
                }
            }
        }
        static void GetTodo(){
            Console.WriteLine("\tTODO Line\n");
            var resList=personList.FindAll(person=>person.Line.Equals(LineEnum.Todo));
            resList.ForEach(person=>Console.WriteLine(person.ToString()+"\n-----"));
        }
        static void GetInProgress(){
            Console.WriteLine("\tIN PROGRESS Line\n");
            var resList=personList.FindAll(person=>person.Line.Equals(LineEnum.InProgress));
            resList.ForEach(person=>Console.WriteLine(person.ToString()+"\n-----"));
        }

        static void GetDone(){
            Console.WriteLine("\tDONE Line\n");
            var resList=personList.FindAll(person=>person.Line.Equals(LineEnum.Done));
            resList.ForEach(person=>Console.WriteLine(person.ToString()+"\n-----"));
        }
        static void newPerson(){

            Person res=new Person();

            Console.WriteLine("Lütfen ID Giriniz:");
            res.ID=Console.ReadLine();

            Console.WriteLine("Lütfen İsim Giriniz:");
            res.FirstName=Console.ReadLine();

            Console.WriteLine("Lütfen Soyİsim Giriniz:");
            res.LastName=Console.ReadLine();

            Console.WriteLine("Lütfen Başlık Giriniz:");
            res.Card.Title=Console.ReadLine();

            Console.WriteLine("Lütfen İçerik Giriniz:");
            res.Card.Contents=Console.ReadLine();

            Console.WriteLine("Lütfen Büyüklük Giriniz XS(1),S(2),M(3),L(4),XL(5):");
            res.Card.Size=(SizeEnum)Convert.ToInt16(Console.ReadLine());

            res.Line=LineEnum.Todo;

            personList.Add(res);

        }
        static void CardDelete(){
            Console.WriteLine("Lütfen Başlık Giriniz:");
            string title=Console.ReadLine();
            personList.Find(person =>person.Card.Title.Equals(title)).Card=null;
        }
        static void CardMove(){
            Console.WriteLine("Lütfen Başlık Giriniz:");
            string title=Console.ReadLine();

            Console.WriteLine("Lütfen Taşınacak Line Seciniz TODO(1) IN PROGRESS(2) DONE(3):");
            LineEnum line=(LineEnum)Convert.ToInt16(Console.ReadLine());

            personList.Find(person=>person.Card.Title.Equals(title)).Line=line;
        }
    }
}
