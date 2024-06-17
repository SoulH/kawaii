using Kawaii.Core.Database;
using Kawaii.Core.Filters;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;


namespace Kawaii.Core.Services
{
    public class CatalogService
    {
        private KawaiiDB db;

        public CatalogService(KawaiiDB database)
        {
            db = database;
            
        }

        public IEnumerable<Product> Search(CatalogFilters filters)
        {
            var q = db.Products
                .Include("Presentations.Attributes.Attribute")
                .Include("Presentations.Images")
                .Where(f => f.Presentations.Any());
            if (filters.Text?.Length > 0)
            {
                var tokens = Regex.Matches(filters.Text, @"\w+").Select(f => f.Value.ToLower()).ToList();
                q = q.Where(f => tokens.Any(t => f.Name.ToLower().Contains(t)));
            }
            if (filters.Size?.Length > 0)
            {
                q = q.Where(f => f.Presentations.Any(g => g.Attributes.Any(h => h.Attribute.Name == "size" && h.RawValue == filters.Size.ToUpper())));
            }
            if (filters.Gender?.Length > 0)
            {
                var options = new string[] { "unisex", filters.Gender.ToLower() };
                q = q.Where(f => f.Presentations.Any(g => g.Attributes.Any(h => h.Attribute.Name == "genre" && options.Contains(h.RawValue.ToLower()))));
            }
            return q.AsSplitQuery().ToList();
        }
    }
}
