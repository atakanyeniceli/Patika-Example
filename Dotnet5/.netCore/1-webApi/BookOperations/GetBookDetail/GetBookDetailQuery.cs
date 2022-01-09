using System;
using System.Linq;
using _1_webApi.Common;
using _1_webApi.DBOperations;

namespace _1_webApi.BooksOperations.GetBookDetail{
    public class GetBookDetailQuery{
        private readonly BookStoreDbContext _Dbcontext;
        public int BookId { get; set; }
        public GetBookDetailQuery(BookStoreDbContext dbcontext)
        {
            _Dbcontext = dbcontext;
        }
        public BookDetailViewModel Handle(){
            var _book=_Dbcontext.Books.Where(book => book.Id==BookId).SingleOrDefault();
            if(_book is null)throw new InvalidOperationException("Kitap Bulunamadı!");
            BookDetailViewModel Vm=new();
            Vm.Title=_book.Title;
            Vm.PageCount=_book.PageCount;
            Vm.PublishDate=_book.PuplishDate.Date.ToString("dd/MM/yyyy");
            Vm.Genre=((GenreEnum)_book.GenreId).ToString();
            return Vm;
        }
    }
    public class BookDetailViewModel{
        public string  Title { get; set; }
        public string Genre { get; set; }
        public int PageCount { get; set; }
        public string PublishDate { get; set; }
    }
}