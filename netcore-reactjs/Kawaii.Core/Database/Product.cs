using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Kawaii.Core.Database
{
    [Table("core_product")]
    public class Product : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("name")]
        public string Name { get; set; }

        public virtual IEnumerable<Presentation> Presentations { get; set; }
    }
}
