using AutoMapper;
using Kawaii.Core.Database;
using Kawaii.Core.DTO;

namespace Kawaii.Server
{
    public class ProductFoundProfile : Profile
    {
        public ProductFoundProfile()
        {
            CreateMap<Product, ProductFound>()
                .ForMember(dst => dst.Presentations, opt => opt.MapFrom(f => f.Presentations));
        }

    }
}
