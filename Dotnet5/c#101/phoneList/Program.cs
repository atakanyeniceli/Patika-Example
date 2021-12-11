using System;
using System.Collections.Generic;

namespace phoneList
{
    class Program
    {
        static List<Person> personList=new List<Person>();
        static void Main(string[] args)
        {
            for(;;){
                Console.WriteLine("Lütfen Yapmak İstediğiniz İşlemi Seciniz.");
                Console.WriteLine("***************************************************");
                Console.WriteLine("1-)Yeni Kayıt Oluşturmak\n2-)Kayıt Silmek\n3-)Kayıt Güncelleme\n4-)Kayıt Listeleme\n5-)Kayıt Arama");
                string choice=Console.ReadLine();
                switch (choice){
                    case "1":
                    newPersonAdd();
                    break;

                    case "2":
                    PersonRemove();
                    break;

                    case "3":
                    break;

                    case "4":
                    personList.ForEach(person=>Console.WriteLine($"Ad:{person.FirstName} Soyad:{person.LastName} Yas:{person.Age} Telefon{person.PhoneNumber}"));
                    break;

                    case "5":
                    break;
                }
            }
        }
        static void newPersonAdd(){
            Console.WriteLine("Lütfen İsim Giriniz:");
             string _firstName=Console.ReadLine();

            Console.WriteLine("Lütfen Soyisim Giriniz:");
            string _lastName=Console.ReadLine();

            Console.WriteLine("Lütfen Yas Giriniz:");
            int _age=Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Lütfen Telefon Numaranızı Giriniz:");
            string _phoneNumber=Console.ReadLine();

            personList.Add( new Person(_firstName,_lastName, _age, _phoneNumber));
        }

        static void PersonRemove(){
            Console.WriteLine("Lütfen Silmek İstediğiniz Kişinin Adını Giriniz:");
            string _firstName=Console.ReadLine();

            Console.WriteLine("Lütfen Silmek İstediğiniz Kişinin SoyAdını Giriniz:");
            string _lastName=Console.ReadLine();
            
           personList.Remove(personList.Find(person=>person.FirstName.Contains(_firstName)&&person.LastName.Contains(_lastName)));
        }
    }
}
