using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Database;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers {

  [Route("api/[controller]")]
  public class CompanyController : Controller {
    Database.Database db = new Database.Database();




    public CompanyController() {
      db.Database.Migrate();
    }
    // GET: api/values
    [HttpGet]
    public IEnumerable<Company> Get() {
      //return new Company[] {
      //  new Company() {
      //    ID = 1,
      //    Name = "AJP Northwest"
      //  }
      // };

      return db.Companies;
    }

    [HttpGet("Get/{id}")]
    public Company Get(int Id) => Id == -1 ? new Company() : db.Companies.Find(Id);

    [HttpPost]
    public void Post(Company company) {
      if (db.Companies.Any(x => x.Id == company.Id)) {
        Company OldCompany = db.Companies.Find(company);
        OldCompany.Name = company.Name;
        OldCompany.Phone = company.Phone;
        OldCompany.State = company.State;
        OldCompany.Zip = company.Zip;
        OldCompany.City = company.City;
      }
      else {
        db.Companies.Add(company);
      }

      //db.SaveChanges();
    }
  }
}
