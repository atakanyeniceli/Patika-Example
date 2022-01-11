using FluentValidation;

namespace _1_webApi.BooksOperations.DeleteBook{
    public class DeleteBookCommandValitor:AbstractValidator<DeleteBookCommand>{
        public DeleteBookCommandValitor(){
            RuleFor(command => command.BookId).GreaterThan(0);
        }
    }
}