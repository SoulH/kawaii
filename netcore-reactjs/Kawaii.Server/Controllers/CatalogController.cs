using AutoMapper;
using Kawaii.Core.Database;
using Kawaii.Core.DTO;
using Kawaii.Core.Filters;
using Kawaii.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace Kawaii.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CatalogController : ControllerBase
    {
        private readonly Mapper _mapper;
        private readonly CatalogService _catalog;
        private readonly ILogger<WeatherForecastController> _logger;

        public CatalogController(Mapper mapper,
            ILogger<WeatherForecastController> logger,
            CatalogService catalog)
        {
            _mapper = mapper;
            _logger = logger;
            _catalog = catalog;
        }

        [HttpPost]
        public IEnumerable<ProductFound> Post(CatalogFilters filters)
        {
            var res = _catalog.Search(filters);
            return _mapper.Map<IEnumerable<ProductFound>>(res);
        }
    }
}
