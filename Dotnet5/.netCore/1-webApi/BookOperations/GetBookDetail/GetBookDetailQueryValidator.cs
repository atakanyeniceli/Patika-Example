using FluentValidation;

namespace _1_webApi.BooksOperations.GetBookDetail{
    public class GetBookDetailQueryValidator:AbstractValidator<GetBookDetailQuery>{
        public GetBookDetailQueryValidator(){
            RuleFor(commnad => commnad.BookId).GreaterThan(0);
        }
    }
}