using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DAL;
using BLL;
using System.Security.Claims;
using System.Threading;
using BLL.Module;

namespace WebApplication.Controllers
{
    [RoutePrefix("api/Account")]

    [EnableCors(origins: "*", headers: "*", methods: "*")]
   
    public class AccountController : ApiController
    {
        [Route("getCurrentUser")]
        [HttpGet]
        public HttpResponseMessage getCurrentUserDetails()
        {
            var prinicpal = (ClaimsPrincipal)Thread.CurrentPrincipal;
            var userId=prinicpal.Claims.Where(c => c.Type == "UserId").Select(c => c.Value).SingleOrDefault().ToString();
            return Request.CreateResponse(HttpStatusCode.OK,UserModule.GetUserDetailById(userId));
        }
        /// <summary>
        /// register
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
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



    }
}
