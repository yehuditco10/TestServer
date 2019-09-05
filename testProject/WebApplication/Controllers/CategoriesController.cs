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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    //[RoutePrefix("api")]
    public class CategoriesController : ApiController
    {
        // GET api/values
        //[Route("getCategories")]
        [HttpGet]
        public IHttpActionResult getCategories()
        {
            return Ok(Class1.GetCategories());
        }
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