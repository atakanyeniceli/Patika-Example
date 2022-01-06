using _2_linq.Entities;
using Microsoft.EntityFrameworkCore;

namespace _2_linq.DbOperatioıns{
    public class LinqDbContext:DbContext{
        public DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseInMemoryDatabase(databaseName:"LinqDataBase");
        }
    }
}