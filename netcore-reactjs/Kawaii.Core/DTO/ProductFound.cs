namespace Kawaii.Core.DTO
{
    public class ProductFound
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public IEnumerable<PresentationFound>? Presentations { get; set; }
    }
}
