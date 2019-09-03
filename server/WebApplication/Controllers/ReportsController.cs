using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.RoutePrefix("api")]
    public class ReportsController : ApiController
    {
        // GET: Reports
        [System.Web.Http.Route("getTeachers")]
        [System.Web.Http.HttpGet]
        public int getTeachers()
        {
            return report.getTeachers();
        }
        [System.Web.Http.Route("getStudents")]
        [System.Web.Http.HttpGet]
        public int getStudents()
        {
            return report.getStudents();
        }
    }
}