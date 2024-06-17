using Kawaii.Core.Database;

namespace Kawaii.Core.Services
{
    public class CategoryService
    {
        private KawaiiDB db;

        public CategoryService(KawaiiDB db) 
        {
            this.db = db;
        }

        public IEnumerable<Category> Search()
        {
            return db.Categories.ToList();
        }
    }
}
