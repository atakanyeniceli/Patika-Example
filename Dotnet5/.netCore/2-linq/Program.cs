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
            var student= _context.Students.ToList<Student>();
        }
    }
}
