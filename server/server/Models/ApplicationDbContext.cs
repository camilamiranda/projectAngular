using System;
using System.Data.Entity;
using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace server.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Voyage> Voyages { get; set; }
    }

    public class Init : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {

            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var users = new[]
            {
                new ApplicationUser
                {
                    Id = "a",
                    UserName = "a@b.c",
                    Email = "a@b.c"
                },
                new ApplicationUser
                {
                    Id = "b",
                    UserName = "b@b.c",
                    Email = "b@b.c"
                }
            };
            foreach (var user in users)
                context.Users.Add(user);
            context.SaveChanges();
            foreach (var user in users)
                userManager.AddPassword(user.Id, "Passw0rd");

            var voyages = new[]
            {
                new Voyage
                {
                    Title = "Reise",
                    Duration = 2,
                    Id = "ReiseId",
                    isPublic = true,
                    UserId = users[0].Id,
                    Budget = 3000,
                    Day = new Day[]
                    {
                        new Day
                        {
                            Id = "yb",
                            schedule = new Schedule[]
                            {
                                new Schedule
                                {
                                    Budget = 1000,
                                    Destination = "Montreal",
                                    Id = "Mtl1",
                                    Transport = new Transport
                                    {
                                        Budget = 3.25,
                                        Id = "MetroId111",
                                        transport = "Metro"
                                    },
                                    Activities = new Activity[]
                                    {
                                        new Activity
                                        {
                                            Address = "Alexandrie Hostel",
                                            Begin = new DateTime(2017, 12, 19, 22, 0, 0),
                                            End = new DateTime(2017, 12, 20, 5, 0, 0),
                                            Budget = 150,
                                            Id = "Hostel111"
                                        },
                                        new Activity
                                        {
                                            Address = "Biodome",
                                            Begin = new DateTime(2017, 12, 19, 5, 0, 0),
                                            End = new DateTime(2017, 12, 19, 11, 0, 0),
                                            Budget = 150,
                                            Id = "Biodome111"
                                        }
                                    }
                                }
                            }
                        },
                        new Day
                        {
                            Id = "yb2",
                            schedule = new Schedule[]
                            {
                                new Schedule
                                {
                                    Budget = 1000,
                                    Destination = "Gatineau",
                                    Id = "Mtl2",
                                    Transport = new Transport
                                    {
                                        Budget = 50,
                                        Id = "BusId111",
                                        transport = "Bus"
                                    },
                                    Activities = new Activity[]
                                    {
                                        new Activity
                                        {
                                            Address = "Gatineau",
                                            Begin = new DateTime(2017, 12, 19, 22, 0, 0),
                                            End = new DateTime(2017, 12, 20, 5, 0, 0),
                                            Budget = 150,
                                            Id = "Gatin111"
                                        },
                                        new Activity
                                        {
                                            Address = "Ottawa",
                                            Begin = new DateTime(2017, 12, 19, 5, 0, 0),
                                            End = new DateTime(2017, 12, 19, 11, 0, 0),
                                            Budget = 150,
                                            Id = "Otta"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            context.Voyages.AddRange(voyages);
            context.SaveChanges();

        }
    }
}