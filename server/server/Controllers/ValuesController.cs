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
        ApplicationDbContext context = new ApplicationDbContext();

        // GET api/values
        [Route("api/all")]
        [AllowAnonymous]
        public IEnumerable<Voyage> Get()
        {
            context.Configuration.ProxyCreationEnabled = false;
            var b = context.Voyages
                .Include("Day.schedule.Transport")
                .Include("Day.schedule.Activities")
                .ToList();
            return b;
        }

        [Route("api/all/{id}")]
        public Voyage Get(string id)
        {
            context.Configuration.ProxyCreationEnabled = false;
            var result = context.Voyages
                .Include("Day.schedule.Transport")
                .Include("Day.schedule.Activities")
                .SingleOrDefault(v => v.Id == id);
            return result;
        }

        // POST api/values
        [HttpPost]
        [Route("api/new")]
        public String Post([FromBody]newVoyage value)
        {
            if (ModelState.IsValid)
            {
                Voyage vo = new Voyage
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = value.Title,
                    Duration = value.Duration,
                    Budget = value.Budget,
                    isPublic = value.isPublic
                };

                context.Voyages.Add(vo);
                context.SaveChanges();
                return vo.Id;
            }

            return null;
        }

        [Route("api/changeSchedule/{id}")]
        public void ChangeSchedule(string id, newSchedule sch)
        {
            context.Configuration.ProxyCreationEnabled = true;
            var voyage = context.Voyages
                .SingleOrDefault(v => v.Id == id);

        }
    }
}
