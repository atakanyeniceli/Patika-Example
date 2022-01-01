using System;

namespace _1_webApi
{
   public class Book{
       public int Id { get; set; }
       public string Title { get; set; }
       public int GenreId { get; set; }
       public int PageCount { get; set; }
       public DateTime  PuplishDate { get; set; }

   }
}
