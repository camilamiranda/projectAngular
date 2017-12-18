using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace server.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        static List<Voyage> voyages = new List<Voyage>(new [] {
                new Voyage
                {
                    Id = "123456789",
                    UserId = "1",
                    Title = "Gros voyage",
                    Days = 8,
                    Budget = 800.25,
                    isPublic = false,
                    Schedule = new [] {
                        new Schedule {
                            Budget = 100.25,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 50,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 50,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 100,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 100,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 200,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 100,
                            Destination = "Gatineau",
                        },
                        new Schedule {
                            Budget = 100,
                            Destination = "Montreal",
                        },
                    }
                },
                new Voyage
                {
                    Id = "Salut",
                    UserId = "1",
                    Title = "Petit voyage",
                    Days = 1,
                    Budget = 25,
                    isPublic = true,
                    Schedule = new [] {
                        new Schedule {
                            Budget = 25,
                            Destination = "Laval",
                        }
                    }
                }
            });

        // GET api/values
        [HttpGet]
        [Route("api/all")]
        public IEnumerable<Voyage> Get()
        {
            return voyages;
        }

        [HttpGet]
        [Route("api/all/{id}")]
        public Voyage Get(string id)
        {
            return voyages.SingleOrDefault(voyage => voyage.Id.Equals(id));
        }

        // POST api/values
        [HttpPost]
        [Route("api/new")]
        public void Post([FromBody]Voyage value)
        {
            if (ModelState.IsValid)
            {
                voyages.Add(value);
            }
            else
                BadRequest();
        }
    }
}
