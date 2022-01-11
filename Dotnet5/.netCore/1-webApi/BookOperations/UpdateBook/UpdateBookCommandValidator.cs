using FluentValidation;

namespace _1_webApi.BooksOperations.UpdateBook{
    public class UpdateBookCommandValidator:AbstractValidator<UpdateBookCommand>{
        public UpdateBookCommandValidator(){
            RuleFor(commnad => commnad.BookId).GreaterThan(0);
            RuleFor(commnad => commnad.Model.GenreId).GreaterThan(0);
            RuleFor(commnad => commnad.Model.Title).NotEmpty().MinimumLength(4);
        }
    }
}