using Microsoft.AspNetCore.Mvc;

namespace ReactWithASP.Server.Models
{
    // This class represents one chore
    public class Chore
    {
        // primary key
        public int Id
        {
            get; set;
        }

        public string Title
        {

            get; set;
        }

        public string Description
        {
            get; set;
        }

        public bool IsCompleted
        {
            get; set;
        }
    }
}
