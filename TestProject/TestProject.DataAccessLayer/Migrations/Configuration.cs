using System.Data.Entity.Migrations;
using TestProject.DataAccessLayer.Context;

namespace TestProject.DataAccessLayer.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<FarmDbContext>
    {
        public Configuration()
        {
            //SetSqlGenerator("System.Data.SQLite", new MigrationSqLiteGenerator());
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FarmDbContext context)
        {
        }
    }
}