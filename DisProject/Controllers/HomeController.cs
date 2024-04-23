using DisProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DisProject.Controllers
{
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

        public IActionResult about()
        {
            return View();
        }

        public IActionResult packages()
        {
            return View();
        }

        public IActionResult feedback()
        {
            return View();
        }

        public IActionResult dublin()
        {
            return View();
        }

        public IActionResult dubai()
        {
            return View();
        }

        public IActionResult italy()
        {
            return View();
        }
        public IActionResult france()
        {
            return View();
        }
        public IActionResult bali()
        {
            return View();
        }

        public IActionResult bookings()
        {
            return View();
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
