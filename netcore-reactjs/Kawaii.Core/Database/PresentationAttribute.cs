using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kawaii.Core.Common;

namespace Kawaii.Core.Database
{
    [Table("core_presentation_attribute")]
    public class PresentationAttribute : TableBase
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("presentation_id")]
        public int PresentationId { get; set; }

        [Required]
        [Column("attribute_id")]
        public int AttributeId { get; set; }

        [Required]
        [Column("raw_value")]
        public string RawValue { get; set; }

        public virtual Presentation Presentation { get; set; }

        public virtual CategoryAttribute Attribute { get; set; }

        public dynamic Value { get => GetValue(); }

        private dynamic GetValue()
        {
            if (Attribute?.ExpectedValue == DataTypeEnum.NUMBER.DisplayName())
                return int.Parse(RawValue);
            if (Attribute?.ExpectedValue == DataTypeEnum.DECIMAL.DisplayName())
                return double.Parse(RawValue);
            if (Attribute?.ExpectedValue == DataTypeEnum.BINARY.DisplayName())
                return new string[] { "1", "t", "true" }.Contains(RawValue);
            return RawValue;
        }
    }
}
