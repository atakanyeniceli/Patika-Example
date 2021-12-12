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
                string[] temp=null;
                Person res=null;
                switch (choice){
                    
                    case "1":
                    newPersonAdd();
                    break;

                    case "2":
                    PersonRemove();
                    break;

                    case "3":
                    temp=PersonNameLastName();
                    res=personList.Find(person=>person.FirstName.Contains(temp[0])&&person.LastName.Contains(temp[1]));
                    if(res!=null)PersonUpdateData(res);
                    else Console.WriteLine("Lütfen Geçerli Bir Kullanıcı Giriniz.");
                    break;

                    case "4":
                    personList.ForEach(person=>Console.WriteLine(person.ToString()));
                    break;

                    case "5":
                    temp=PersonNameLastName();
                    res=personList.Find(person=>person.FirstName.Contains(temp[0])&&person.LastName.Contains(temp[1]));
                    Console.WriteLine(res!=null ?res.ToString():"****************Lütfen Geçerli bir kullanıcı giriniz.**************");
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
            string[] temp=PersonNameLastName();
           personList.Remove(personList.Find(person=>person.FirstName.Contains(temp[0])&&person.LastName.Contains(temp[1])));
        }
        static string[] PersonNameLastName(){
            string []temp=new string[2];
            Console.WriteLine("Lütfen Kişinin Adını Giriniz:");
            temp[0]=Console.ReadLine();

            Console.WriteLine("Lütfen Kişinin SoyAdını Giriniz:");
            temp[1]=Console.ReadLine();
            return temp;
        }
        
        static void PersonUpdateData(Person res){
            Console.WriteLine("Lütfen Isim Giriniz:");
            string firstname=Console.ReadLine();

            Console.WriteLine("Lütfen SoyIsim Giriniz:");
            string lastName=Console.ReadLine();

            Console.WriteLine("Lütfen Yas Giriniz:");
            int age=Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Lütfen telefon Numarasını giriniz.");
            string phoneNumber=Console.ReadLine();

            res.PersonUpdate(firstname,lastName,age,phoneNumber);
        }
    }
}
