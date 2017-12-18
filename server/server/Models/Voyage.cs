using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class Voyage
    {
        [Key]
        public String Id { get; set; }

        [Required]
        public String UserId { get; set; }

        [Required]
        [MinLength(1)]
        public String Title { get; set; }

        [Required]
        [Range(minimum: 0, maximum: 365)]
        public int Days { get; set; }

        [Required]
        [Range(minimum: 0, maximum: Double.MaxValue)]
        public Double Budget { get; set; }

        [Required]
        public bool isPublic { get; set; }

        public Schedule[] Schedule { get; set; }
    }
}