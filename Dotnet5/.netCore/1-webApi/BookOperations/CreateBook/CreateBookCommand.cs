using System;
using System.Linq;
using _1_webApi.Common;
using _1_webApi.DBOperations;
using AutoMapper;

namespace _1_webApi.BooksOperations.CreateBook{
    public class CreateBookCommand{
        public CreateBookModel Model { get; set; }
        private readonly BookStoreDbContext _dbContext;
        private  IMapper _mapper;
        public CreateBookCommand(BookStoreDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public void Handle(){

            var book=_dbContext.Books.SingleOrDefault(x => x.Title == Model.Title);

            if(book is not null)
                throw new InvalidOperationException("Kitap zaten mevcut");

            //Model i Book a maple
            
            book=_mapper.Map<Book>(Model);//new();
            // book.Title=Model.Title;
            // book.PuplishDate=Model.PublishDate;
            // book.PageCount=Model.PageCount;
            // book.GenreId=Model.GenreId;

            _dbContext.Books.Add(book);
            _dbContext.SaveChanges();
        }
    }
    public class CreateBookModel{
        public string Title { get; set; }
        public int GenreId { get; set; }
        public int PageCount { get; set; }
        public DateTime PublishDate { get; set; }
    }
}