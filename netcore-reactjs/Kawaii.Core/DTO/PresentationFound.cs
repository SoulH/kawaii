namespace Kawaii.Core.DTO
{
    public class PresentationFound
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public double Price { get; set; }

        public int Stock { get; set; } = 0;

        public int StockMin { get; set; } = 1;

        public int Order { get; set; } = 0;

        public Dictionary<string, dynamic>? Details { get; set; }

        public IEnumerable<string>? Images { get; set; }
    }
}
