using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace Kawaii.Core.Database
{
    [Table("core_presentation_image")]
    public class PresentationImage : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("presentation_id")]
        public int PresentationId { get; set; }

        [Required]
        [Column("image")]
        public string Image { get; set; }

        [Column("position")]
        public int Position { get; set; } = 0;

        public virtual Presentation? Presentation { get; set; }
    }
}
