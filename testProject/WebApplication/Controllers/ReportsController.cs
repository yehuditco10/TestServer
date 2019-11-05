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
    [System.Web.Http.RoutePrefix("api/report")]
    public class ReportsController : ApiController
    { 
        // GET: Reports
        /// <summary>
        /// מחזירה את כמות המורות המשתמשות באתר
        /// </summary>
        /// <returns></returns>
        [System.Web.Http.Route("getTeachers")]
        [System.Web.Http.HttpGet]
        public int getTeachers()
        {
            return report.getTeachers();
        }

        /// <summary>
        /// מחזירה את כמות התלמידות המשתמשות באתר
        /// </summary>
        /// <returns></returns>
        [System.Web.Http.Route("getStudents")]
        [System.Web.Http.HttpGet]
        public int getStudents()
        {
            return report.getStudents();
        }

        /// <summary>
        /// ?????
        /// </summary>
        /// <param name="testID"></param>
        /// <returns></returns>
        [System.Web.Http.Route("getKnowledge")]
        [System.Web.Http.HttpGet]
        public List<int> getKnowledge(int testID)
        {
            return report.getKnowledge(testID);
        }

        /// <summary>
        /// מחזירה נתונים לסטטיסטיקת הציונים
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [System.Web.Http.Route("getStaticMark")]
        [System.Web.Http.HttpGet]
        public HttpResponseMessage getStaticMark(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, StatisticModule.getStaticMark(id));
        }
    }
}