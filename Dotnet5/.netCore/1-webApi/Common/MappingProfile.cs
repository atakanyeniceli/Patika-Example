using _1_webApi.BooksOperations.CreateBook;
using AutoMapper;

namespace _1_webApi.Common{
    public class MappingProfile:Profile{
        public MappingProfile(){
            //ilk parametre source ikincisi target yani CretaBookModel Booka dönüştürülebilsin. 
            CreateMap<CreateBookModel,Book>();
            CreateMap<>()
            
        }
    }
}