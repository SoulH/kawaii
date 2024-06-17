using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Kawaii.Core.Common
{
    public enum DataTypeEnum
    {
        [Display(Name ="text")]
        TEXT,
        [Display(Name ="number")]
        NUMBER,
        [Display(Name ="decimal")]
        DECIMAL,
        [Display(Name ="binary")]
        BINARY
    }

    public static class DataTypeEnumExtensions
    {
        public static string? DisplayName(this DataTypeEnum obj)
        {
            return obj.ToString().ToLower().Replace("_", " ");
        }
    }
}
