using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DAL;
using BLL;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api")]
    public class ValuesController : ApiController
    {


        // GET api/values
        //[Route("login")]
        //[HttpPost]
        //public HttpResponseMessage login(Teacher t)
        //{
        //    int i = Class1.Signin(t);
        //    //bool b= BLL.Class1.Enter("חנה", "123");
        //    bool b = Class1.Enter(t);
        //    if (b == true)
        //    {
        //      return  Request.CreateResponse(HttpStatusCode.OK);
        //    }
        //    return null;
        //}
        [Route("login")]
        [HttpPost]
        public int login(Teacher t)
        {
            
            return Class1.Signin(t);
            
        }

        [Route("register")]
        [HttpPost]
        public HttpResponseMessage register(Teacher t)
        {

            //bool b= BLL.Class1.Enter("חנה", "123");
            bool b = Class1.Register(t);
            if (b == true)
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            return null;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public bool Post(string value)
        {
            return true;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
