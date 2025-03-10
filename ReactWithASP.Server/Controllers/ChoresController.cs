// Controllers/ChoresController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactWithASP.Server.Data;
using ReactWithASP.Server.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System;

namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChoresController : ControllerBase
    {
        private readonly ChoreContext _context;

        // Dependency injection provides the ChoreContext.
        public ChoresController(ChoreContext context)
        {
            _context = context;
        }

        // GET: api/chores
        // Retrieve all chores.
        [HttpGet]
        public async Task<IActionResult> GetChores()
        {
            var chores = await _context.Chores.ToListAsync();
            return Ok(chores);
        }

        // GET: api/chores/{id}
        // Retrieve a single chore by id.
        [HttpGet("{id}")]
        public async Task<IActionResult> GetChore(int id)
        {
            var chore = await _context.Chores.FindAsync(id);
            if (chore == null)
                return NotFound();
            return Ok(chore);
        }

        // POST: api/chores
        // Create a new chore.
        [HttpPost]
        public async Task<IActionResult> CreateChore([FromBody] Chore chore)
        {
            // Add the new chore to the DbContext.
            _context.Chores.Add(chore);
            await _context.SaveChangesAsync();

            // Return the created chore (with its new ID).
            return CreatedAtAction(nameof(GetChore), new { id = chore.Id }, chore);
        }

        // PUT: api/chores/{id}
        // Update an existing chore.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateChore(int id, [FromBody] Chore updatedChore)
        {
            if (id != updatedChore.Id)
                return BadRequest();

            _context.Entry(updatedChore).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChoreExists(id))
                    return NotFound();
                else
                    throw;
            }

            return Ok(updatedChore);    
        }

        // DELETE: api/chores/{id}
        // Delete a chore.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChore(int id)
        {
            var chore = await _context.Chores.FindAsync(id);
            if (chore == null)
                return NotFound();

            _context.Chores.Remove(chore);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Helper method to check if a chore exists.
        private bool ChoreExists(int id)
        {
            return _context.Chores.Any(e => e.Id == id);
        }
    }
}


//Explanation of Endpoints:

//GET / api / chores returns all chores.
//GET /api/chores/{id} returns one chore by its ID.
//POST /api/chores creates a new chore.
//PUT / api / chores /{ id}
//updates an existing chore.
//DELETE /api/chores/{id} deletes a chore.