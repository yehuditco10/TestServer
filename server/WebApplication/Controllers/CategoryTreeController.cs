using BLL.Models;
using BLL.Module;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoryTreeController : ApiController
    {
        [HttpGet]
        public List<CategoryTreeItem> GetCategoryTree()
        {
           return CategoryTreeModule.GetCategoryTree();
        }
    }
}
