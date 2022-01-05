using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using _1_webApi.DBOperations;

namespace _1_webApi.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class BookController:ControllerBase{
        // private static List<Book>BookList=new List<Book>(){
        //     new Book(){Id=1, Title="Lean StartUp", GenreId=1, PageCount=200, PuplishDate=DateTime.Now},
        //     new Book(){Id=2, Title="Herland", GenreId=2, PageCount=250, PuplishDate=DateTime.Now},
        //     new Book(){Id=3, Title="DUne", GenreId=2, PageCount=540, PuplishDate=DateTime.Now},
        // };

        private readonly BookStoreDbContext _context;
        public BookController(BookStoreDbContext context){
            _context=context;
        }

        [HttpGet]
        public List<Book>GetBooks(){
            var _bookList=_context.Books.OrderBy(x=>x.Id).ToList<Book>();
            return _bookList;
        }

        [HttpGet("{id}")]
        public Book GetById(int id){
            var _book=_context.Books.Where(book => book.Id==id).SingleOrDefault();
            return _book;
        }

        [HttpPost]
        public IActionResult AddBook([FromBody]Book newBook){
            var book=_context.Books.SingleOrDefault(x => x.Title == newBook.Title);
            if(book is not null) return BadRequest();

            _context.Books.Add(newBook);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id,[FromBody]Book updatedBook){
            var book=_context.Books.SingleOrDefault(x => x.Id == id);
            if(book is null)
                return BadRequest();
            book.GenreId = updatedBook.GenreId != default ? updatedBook.GenreId : book.GenreId;
            book.PageCount = updatedBook.PageCount != default ? updatedBook.PageCount : book.PageCount;
            book.PuplishDate = updatedBook.PuplishDate != default ? updatedBook.PuplishDate : book.PuplishDate;
            book.Title = updatedBook.Title ?? book.Title;
            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id){
            var book=_context.Books.SingleOrDefault(x => x.Id == id);

            if(book is null)
                return BadRequest();

            _context.Books.Remove(book);
            _context.SaveChanges();
            return Ok();
        }
    }
}
