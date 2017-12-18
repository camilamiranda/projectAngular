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
            var b = context.Voyages.Include("Day.schedule.Transport").Include("Day.schedule.Activities")
                .ToList();
            return b;
        }

        [Route("api/all/{id}")]
        public Voyage Get(string id)
        {
            throw new NotImplementedException();
        }

        // POST api/values
        [HttpPost]
        [Route("api/new")]
        public void Post([FromBody]Voyage value)
        {
            if (ModelState.IsValid)
            {
                context.Voyages.Add(value);
            }
        }
    }
}
