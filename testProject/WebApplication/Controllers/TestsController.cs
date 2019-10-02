﻿

using BLL.CRUD;
using BLL.Module;
using BLL.ViewModels;
using DAL;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [EnableCors("*","*","*")]
    [RoutePrefix("api")]
    public class TestsController : ApiController
    {
        [Route("SaveTest")]
        [HttpPost]
        public bool saveTest(TestVM test)
        {
            return TestModule.CreateTest(test);
        }
        [Route("FilterByCategory")]
        [HttpPost]
        public List<TestVM> GetTests(int categoryId)
        {
            return TestModule.FilterByCategory(categoryId);
        }
        [Route("GetTestById")]
        [HttpPost]
        public TestVM GetTestById(int testId)
        {
            return TestModule.GetByTestId(testId);
        }
        
            [Route("GetByTestIdForStudent")]
        [HttpPost]
        public TestForStudentVM GetByTestIdForStudent(int testId)
        {
            return TestModule.GetByTestIdForStudent(testId);
        }

        [Route("openTest")]
        [HttpGet]
        public bool openTest(int testId,string studentTZ)
        {
            return TestModule.openTest(testId,studentTZ);
        }
        [Route("studentForTest")]
        [HttpPost]
        public bool studentForTest(StudentForTestVM[] students)
        {
            return TestModule.studentForTest(students);
        }
       

    }
}