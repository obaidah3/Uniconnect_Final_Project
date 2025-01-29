using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using UniConnect.Models;

namespace UniConnect.Controllers
{
    public class BusController : Controller
    {
        private readonly HQ_Buses _db;

        public BusController(HQ_Buses db)
        {
            _db = db;
        }

        public IActionResult Bus()
        {
            return View();
        }

        public IActionResult HQ()
        {
            var buses = _db.id.ToList();
            return View(buses);
        }
    }
}