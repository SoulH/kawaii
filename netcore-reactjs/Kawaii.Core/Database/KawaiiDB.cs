using Microsoft.EntityFrameworkCore;

namespace Kawaii.Core.Database
{
    public class KawaiiDB: DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryAttribute> CategoryAttributes { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Presentation> Presentations { get; set; }
        public DbSet<PresentationAttribute> PresentationAttributes { get; set; }
        public DbSet<PresentationImage> PresentationImages { get; set; }

        public KawaiiDB() 
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            ChangeTracker.LazyLoadingEnabled = false;
        }

        public KawaiiDB(DbContextOptions<KawaiiDB> options) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            ChangeTracker.LazyLoadingEnabled = false;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            base.OnConfiguring(options);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
