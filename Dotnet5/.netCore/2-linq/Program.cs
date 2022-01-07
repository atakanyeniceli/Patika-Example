using System;
using System.Linq;
using _2_linq.DbOperatioıns;
using _2_linq.Entities;

namespace _2_linq
{
    class Program
    {
        static void Main(string[] args)
        {
            DataGenerator.Initialize();
            LinqDbContext _context=new LinqDbContext();
            var students= _context.Students.ToList<Student>();

            //Find()
            Console.WriteLine("*********Find & Where************");
            var student=_context.Students.Where(student => student.StudentId==1).FirstOrDefault();
            Console.WriteLine("Where="+student.Name);
            student=_context.Students.Find(1);
            Console.WriteLine("Find="+student.Name);

            //FirstOrDefault Liste dönmesi halinde ilk veriyi döndürür eğer hiç veri gelmezse null döndürür.
            Console.WriteLine("***************FirstOrDefault*************");
            student=_context.Students.Where(student => student.Surname=="Yeniceli").FirstOrDefault();
            Console.WriteLine("Where sonra FirstOrDefault="+student.Name);
            student=_context.Students.FirstOrDefault(student => student.Surname=="Yeniceli");
            Console.WriteLine("FirstOrDefault içinde Where="+student.Name);

            //SingleOrDefault Şarta bağlı olarak liste veri dönerse hata döndürür. Rekil veri döndürür. veri yoksa null döndürür.
            Console.WriteLine("*****SingleOrDefault*****");
            student=_context.Students.SingleOrDefault(student => student.Name=="Atakan");
            Console.WriteLine(student.Name);

            //ToList where ile dönen çoklu datayı listeler.
            Console.WriteLine("****ToList******");
            var studentList=_context.Students.Where(student => student.ClassId==1).ToList();
            Console.WriteLine(studentList.Count);

            //OrderByAscending
            Console.WriteLine("*****OrderByAscending*****");
            students=_context.Students.OrderBy(student => student.StudentId).ToList();
            foreach(var item in students)
                Console.WriteLine(item.StudentId+"="+item.Name);

            //OrderByDescending
            Console.WriteLine("*****OrderByDescending*****");
            students=_context.Students.OrderByDescending(student => student.StudentId).ToList();
            foreach(var item in students)
                Console.WriteLine(item.StudentId+"="+item.Name);

            //Anonymous Object Result
            Console.WriteLine("*****Anonymous Object Result********");
            var AnonymousObject=_context.Students
                                        .Where(student => student.ClassId==1)
                                        .Select(student => new {
                                            Id=student.StudentId,
                                            FullName=student.Name+" "+student.Surname
                                            }
                                        );
            foreach(var item in AnonymousObject)
                Console.WriteLine(item.Id+"="+item.FullName);
        }
    }
}
