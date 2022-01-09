using Microsoft.EntityFrameworkCore;

namespace _1_webApi.DBOperations{
    
    public class BookStoreDbContext:DbContext{
         public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options):base(options){
         }
         public DbSet<Book> Books {get;set;}
    }
}