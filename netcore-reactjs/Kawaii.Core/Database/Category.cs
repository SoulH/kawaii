using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kawaii.Core.Database
{
    [Table("core_category")]
    public class Category : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("name")]
        public string Name { get; set; }

        [MaxLength(1000)]
        [Column("description")]
        public string? Description { get; set; }

        [Column("parent_id")]
        public int? ParentId { get; set; }

        public virtual Category? Parent { get; set; }
    }
}
