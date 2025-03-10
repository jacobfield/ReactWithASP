// Create a WebApplicationBuilder instance with the command-line arguments.
using Microsoft.EntityFrameworkCore;
using ReactWithASP.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add the controllers to the services container.
builder.Services.AddControllers();

// Configure EF Core to use SQL Server.
builder.Services.AddDbContext<ChoreContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Add and configure the CORS services.
builder.Services.AddCors(options =>
{
    // Define a CORS policy named "AllowReactApp".
    options.AddPolicy("AllowReactApp",
        builder => builder.WithOrigins("https://localhost:58274/") // Allow requests from the specified origin (adjust the port if needed).
                          .AllowAnyHeader() // Allow any headers.
                          .AllowAnyMethod()); // Allow any HTTP methods.
});

// Add the endpoints API explorer.
builder.Services.AddEndpointsApiExplorer();

// Add the Swagger generator for API documentation.
builder.Services.AddSwaggerGen();

// Build the WebApplication instance.
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Enable the middleware for serving the generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable the middleware for serving the Swagger UI.
    app.UseSwaggerUI();

    // Configure the exception handler to use the "/Error" route.
    app.UseExceptionHandler("/Error");

    // Use HTTP Strict Transport Security (HSTS).
    app.UseHsts();
}

// Redirect HTTP requests to HTTPS.
app.UseHttpsRedirection();

// Serve default files, such as index.html.
app.UseDefaultFiles();

// Enable static file serving.
app.UseStaticFiles();

// Enable routing.
app.UseRouting();

// Apply the "AllowReactApp" CORS policy to the requests.
app.UseCors("AllowReactApp");

// Enable authorization middleware.
app.UseAuthorization();

// Map the controller routes.
app.MapControllers();

// Map a fallback route to serve the "index.html" file.
app.MapFallbackToFile("index.html");

// Run the application.
app.Run();
