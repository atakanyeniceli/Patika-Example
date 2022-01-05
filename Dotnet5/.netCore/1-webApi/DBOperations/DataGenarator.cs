using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace _1_webApi.DBOperations{
    public class DataGenerator{
        public static void Initiaze(IServiceProvider serviceProvider){
            using(var context = new BookStoreDbContext(serviceProvider.GetRequiredService<DbContextOptions<BookStoreDbContext>>())){
                if(context.Books.Any()){
                    return;
                }
                context.Books.AddRange(
                    new Book(){/*Id=1,*/ Title="Lean StartUp", GenreId=1, PageCount=200, PuplishDate=DateTime.Now},
                    new Book(){/*Id=2,*/ Title="Herland", GenreId=2, PageCount=250, PuplishDate=DateTime.Now},
                    new Book(){/*Id=3,*/ Title="Dune", GenreId=2, PageCount=540, PuplishDate=DateTime.Now}
                );
                context.SaveChanges();
            }
        }
    }
}