using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Database;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers {
  [Route("api/[controller]")]
  public class CompanyController : Controller {
    // GET: api/values
    [HttpGet]
    public IEnumerable<Company> Get() {
     return new Company[] {
        new Company() {
          ID = 1,
          Name = "AJP Northwest"
        }
      };


    }
  }
}
