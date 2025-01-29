using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UniConnect.Models;

namespace UniConnect.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Main()
    {
        return View();
    }
    public IActionResult GoToBus() 
    {
        // Redirect to the Bus/Index action in the BusController
        return RedirectToAction("Bus", "Bus"); 
    }
    
    public IActionResult GoToProfessor() 
    {
        // Redirect to the Bus/Index action in the BusController
        return RedirectToAction("Bus", "Bus"); 
    }
    
    // public IActionResult Professors()
    // {
    //     return View();
    // }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}