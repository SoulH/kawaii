using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kawaii.Core.Database
{
    [Table("core_product_category")]
    public class ProductCategory: TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("product_id")]
        public int ProductId { get; set; }

        [Column("category_id")]
        public int CategoryId { get; set; }

        public virtual Product? Product { get; set; }

        public virtual Category? Category { get; set; }
    }
}
