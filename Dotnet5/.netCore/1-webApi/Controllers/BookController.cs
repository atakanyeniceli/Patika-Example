
using Microsoft.AspNetCore.Mvc;
using _1_webApi.DBOperations;
using _1_webApi.BooksOperations.GetBooks;
using System;
using _1_webApi.BooksOperations.GetBookDetail;
using _1_webApi.BooksOperations.CreateBook;
using _1_webApi.BooksOperations.UpdateBook;
using _1_webApi.BooksOperations.DeleteBook;
using AutoMapper;

namespace _1_webApi.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class BookController:ControllerBase{
        private readonly BookStoreDbContext _context;
        private readonly IMapper _mapper;
        public BookController(BookStoreDbContext context){
            _context=context;
        }

        [HttpGet]
        public IActionResult GetBooks(){
            GetBooksQuery query=new(_context);
           var result= query.Handle();
           return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id){
            BookDetailViewModel result;
            try{
                GetBookDetailQuery query=new(_context);
                query.BookId=id;
                result=query.Handle();
            }catch(Exception Ex){
                return BadRequest(Ex.Message);
            }
            return Ok(result);
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] CreateBookModel newBook){
            CreateBookCommand command=new(_context,_mapper);
            try{
                command.Model=newBook;
                command.Handle();
            }catch(Exception ex){
                return BadRequest(ex.Message);
            }
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id,[FromBody]UpdateBookModel updatedBook){
            try{
                UpdateBookCommand command=new(_context);
                command.BookId=id;
                command.Model=updatedBook;
                command.Handle();
            }catch(Exception Ex){
                return BadRequest(Ex.Message);
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id){
            try{
                DeleteBookCommand command=new(_context);
                command.BookId=id;
                command.Handle();
            }catch(Exception Ex){
                return BadRequest(Ex.Message);
            }
            return Ok();
        }
    }
}
