using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL;

namespace WebApplication.Controllers
{
    //[RoutePrefix("api")]
    public class CategoriesController : ApiController
    {
        /// <summary>
        /// פונקציה שמחזירה רשימת קטגוריות
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult getCategories()
        {
            return Ok(Class1.GetCategories());
        }

        /// <summary>
    /// הוספת קטגוריה
    /// </summary>
    /// <param name="id"></param>
    /// <param name="categoryName"></param>
    /// <returns></returns>
        [Route("addCategory")]
        [HttpGet]
        public IHttpActionResult Addcategory(int id, string categoryName)
        {
           Class1.AddCategories(id, categoryName);
           return Ok();
          // return Ok(Class1.AddCategories(id,categoryName));
        }

    }
}