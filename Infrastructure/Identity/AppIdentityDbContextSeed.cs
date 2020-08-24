using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Jatin",
                    Email = "jatin@test.com",
                    UserName = "jatin@test.com",
                    Address = new Address 
                    {
                        FirstName = "Jatin",
                        LastName = "Goyal",
                        Street = "15 Sector",
                        City = "Sonipat",
                        State = "Haryana",
                        ZipCode = "131001"
                    }
                };

               await userManager.CreateAsync(user, "Pa$$w0rd") ;

            }
        }
    }
}