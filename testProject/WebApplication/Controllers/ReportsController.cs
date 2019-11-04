using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Net.Http;
using System.Net;
using BLL.Module;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.RoutePrefix("api/report")]
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
        [System.Web.Http.Route("getStudents")]
        [System.Web.Http.HttpGet]
        public List<int> getKnowledge(int testID)
        {
            return report.getKnowledge(testID);
        }
        //[System.Web.Http.Route("getStaticMark")]
        [System.Web.Http.HttpGet]
        public HttpResponseMessage getStaticMark(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, StatisticModule.getStaticMark(id));
        }
    }
}