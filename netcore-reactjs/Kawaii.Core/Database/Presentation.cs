using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Kawaii.Core.Database
{
    [Table("core_presentation")]
    public class Presentation : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("product_id")]
        public int ProductId { get; set; }

        [Required]
        [Column("price")]
        public double Price { get; set; }

        [Column("stock")]
        public int Stock { get; set; } = 0;

        [Column("stock_min")]
        public int StockMin { get; set; } = 1;

        [Column("order")]
        public int Order { get; set; } = 0;

        public virtual Product Product { get; set; }

        public virtual IEnumerable<PresentationAttribute> Attributes { get; set; }

        public virtual IEnumerable<PresentationImage> Images { get; set; }

    }
}
