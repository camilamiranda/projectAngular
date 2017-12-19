using System.ComponentModel.DataAnnotations;

namespace server.Controllers
{
    public class newSchedule
    {
        [Required]
        public string Transport { get; set; }

        [Required]
        public double Budget { get; set; }

        [Required]
        public string Destination { get; set; }
    }
}