using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace _1_webApi.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class BookController:ControllerBase{
        private static List<Book>BookList=new List<Book>(){
            new Book(){Id=1, Title="Lean StartUp", GenreId=1, PageCount=200, PuplishDate=DateTime.Now},
            new Book(){Id=2, Title="Herland", GenreId=2, PageCount=250, PuplishDate=DateTime.Now},
            new Book(){Id=3, Title="DUne", GenreId=2, PageCount=540, PuplishDate=DateTime.Now},
        };

        [HttpGet]
        public List<Book>GetBooks(){
            var _bookList=BookList.OrderBy(x=>x.Id).ToList<Book>();
            return _bookList;
        }

        [HttpGet("{id}")]
        public Book GetById(int id){
            var _book=BookList.Where(book => book.Id==id).SingleOrDefault();
            return _book;
        }

        [HttpPost]
        public IActionResult AddBook([FromBody]Book newBook){
            var book=BookList.SingleOrDefault(x => x.Title == newBook.Title);
            if(book is not null) return BadRequest();

            BookList.Add(newBook);
            return Ok();

        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id,[FromBody]Book updatedBook){
            var book=BookList.SingleOrDefault(x => x.Id == id);
            if(book is null)
                return BadRequest();
            book.GenreId = updatedBook.GenreId != default ? updatedBook.GenreId : book.GenreId;
            book.PageCount = updatedBook.PageCount != default ? updatedBook.PageCount : book.PageCount;
            book.PuplishDate = updatedBook.PuplishDate != default ? updatedBook.PuplishDate : book.PuplishDate;
            book.Title = updatedBook.Title != default ? updatedBook.Title : book.Title;
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id){
            var book=BookList.SingleOrDefault(x => x.Id == id);

            if(book is null)
                return BadRequest();

            BookList.Remove(book);
            return Ok();
        }
    }
}
