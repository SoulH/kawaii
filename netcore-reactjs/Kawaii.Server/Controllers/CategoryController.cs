using Kawaii.Core.Database;
using Kawaii.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace Kawaii.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {

        private readonly CategoryService categories;
        private readonly ILogger<WeatherForecastController> logger;

        public CategoryController(CategoryService categories,
            ILogger<WeatherForecastController> logger)
        {
            this.logger = logger;
            this.categories = categories;
        }

        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories.Search();
        }
    }
}
