// Importing the necessary namespace for building MVC web applications.
using Microsoft.AspNetCore.Mvc;

namespace ReactWithASP.Server.Controllers
{
    // This attribute indicates that this class will serve HTTP API responses.
    [ApiController]

    // The Route attribute defines the URL pattern for this controller.
    [Route("api/[controller]")]

    // This class inherits from ControllerBase, which provides methods to handle HTTP responses.
    public class Working : ControllerBase
    {
        // Specifies that this method responds to HTTP GET requests.
        [HttpGet]

        // This method handles the GET request and returns a response.
        public IActionResult Get()
        {
            // Returning an HTTP 200 OK response with a string message.
            return Ok("Frontend and backend are working together!");
        }
    }
}
