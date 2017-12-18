using System;
using System.ComponentModel.DataAnnotations;
using System.Net;

namespace server.Models
{
    public class Day
    {
        [Key]
        public String Id { get; set; }

        public virtual Schedule[]  schedule { get; set; }
    }

    public class Schedule
    {
        [Key]
        public String Id { get; set; }

        public Double Budget { get; set; }
        
        public String Destination { get; set; }

        public virtual Transport Transport { get; set; }
        
        public virtual Activity[] Activities { get; set; }
    }

    public class Activity
    {
        [Key]
        public String Id { get; set; }

        public String Address { get; set; }
        public Double Budget { get; set; }
        public DateTime Begin { get; set; }
        public DateTime End { get; set; }
    }

    public class Transport
    {
        [Key]
        public String Id { get; set; }

        public String transport { get; set; }

        public Double Budget { get; set; }
    }
}