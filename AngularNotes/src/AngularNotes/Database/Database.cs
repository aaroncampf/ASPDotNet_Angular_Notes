using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Database {
  public class Database : DbContext {
    public DbSet<Company> Companies { get; set; }


    public Database(DbContextOptions<Database> options) : base(options) {
    }
    public Database(DbContextOptions options) : base(options) {
    }

    public Database() {
    }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
      base.OnConfiguring(optionsBuilder);
      //this.Database.EnsureCreated();


      /*
        var connectionStringBuilder = new SqliteConnectionStringBuilder {DataSource = "test.db"};
        var connectionString = connectionStringBuilder.ToString();
        var connection = new SqliteConnection(connectionString);
      */

      optionsBuilder.UseSqlite("Data Source=c:\\Aaron\\AngularNotes.db;");
      //optionsBuilder.tab
    }
  }
}
