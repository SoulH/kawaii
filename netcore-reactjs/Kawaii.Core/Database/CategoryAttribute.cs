using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kawaii.Core.Database
{
    [Table("core_category_attribute")]
    public class CategoryAttribute : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("category_id")]
        public int CategoryId { get; set; }

        [Required]
        [Column("name")]
        public string Name { get; set; }

        [Required]
        [Column("expected_value")]
        public string ExpectedValue { get; set; }

        public virtual Category? Category { get; set; }
    }
}
