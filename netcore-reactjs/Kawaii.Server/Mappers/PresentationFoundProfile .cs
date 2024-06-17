using AutoMapper;
using Kawaii.Core.Database;
using Kawaii.Core.DTO;

namespace Kawaii.Server
{
    public class PresentationFoundProfile : Profile
    {
        public PresentationFoundProfile()
        {
            CreateMap<Presentation, PresentationFound>()
                .ForMember(dst => dst.Images, opt => opt.MapFrom(f =>
                    f.Images == null ? Array.Empty<string>().ToList() 
                    : f.Images.OrderBy(f => f.Position).Select(f => f.Image))
                ).ForMember(dst => dst.Details, opt => opt.MapFrom(f =>
                    f.Attributes == null ? new Dictionary<string, dynamic>() 
                    : f.Attributes.ToDictionary(a => a.Attribute.Name, b => b.Value))
                );
        }

    }
}
