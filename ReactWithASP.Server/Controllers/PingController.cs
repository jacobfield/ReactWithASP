using Microsoft.AspNetCore.Mvc;

namespace ReactWithASP.Server.Controllers
{
   
        [ApiController]
    [Route("api/[controller]")]
    public class PingController : ControllerBase
        {
            [HttpGet]
        [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]

            public IActionResult Get()
            {
                return Ok("Pong");
            }

        }
}
