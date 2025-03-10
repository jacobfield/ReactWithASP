using Microsoft.EntityFrameworkCore;
using ReactWithASP.Server.Models;

namespace ReactWithASP.Server.Data
{
    // The DbContext represents a session with the database
    // This allows us to query and save instances of the Chore class
    // The ChoreContext will extend DbContext
    public class ChoreContext: DbContext
    {

        // The constructor passes options to the base DbContext
        public ChoreContext(DbContextOptions<ChoreContext> options) : base(options)
        {

        }

        // A DbSet represents the collection of the named entity in the database:
        public DbSet<Chore> Chores
        {
        get; set;
        }
    }
}
