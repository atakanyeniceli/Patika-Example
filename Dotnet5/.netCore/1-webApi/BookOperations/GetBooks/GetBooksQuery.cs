using System;
using System.Collections.Generic;
using _1_webApi.DBOperations;
using System.Linq;
using _1_webApi.Common;

namespace _1_webApi.BooksOperations.GetBooks{
    public class GetBooksQuery{
        
        private readonly BookStoreDbContext _dbContext; 
        public GetBooksQuery(BookStoreDbContext dbContext){
            _dbContext=dbContext;
        }

        public List<BooksViewModel> Handle(){

            var _bookList=_dbContext.Books.OrderBy(x=>x.Id).ToList<Book>();
            
            List<BooksViewModel> Vm=new List<BooksViewModel>();

            foreach(var book in _bookList){
                Vm.Add(new BooksViewModel(){
                    Title=book.Title,
                    Genre=((GenreEnum)book.GenreId).ToString(),
                    PublishDate=book.PuplishDate.Date.ToString("dd/MM/yyy"),
                    PageCount=book.PageCount
                });
            }
            return Vm;
        }
    }

    public class BooksViewModel{
        
        public string Title { get; set; }
        public int PageCount { get; set; }
        public string PublishDate { get; set; }
        public string Genre { get; set; }

    }
}