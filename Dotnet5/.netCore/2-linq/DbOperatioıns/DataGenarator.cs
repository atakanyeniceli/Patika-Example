using System.Linq;
using _2_linq.Entities;

namespace _2_linq.DbOperatioıns{
    public static class DataGenerator{
        public static void Initialize(){
            using(var context = new LinqDbContext()){
                if(context.Students.Any())return;
                context.AddRange(
                    new Student(){Name="Atakan",Surname="Yeniceli",ClassId=1},
                    new Student(){Name="Hatice",Surname="İnkaya",ClassId=1},
                    new Student(){Name="Efsane",Surname="Yeniceli",ClassId=1}
                );
                context.SaveChanges();
            }
        }
    }
}