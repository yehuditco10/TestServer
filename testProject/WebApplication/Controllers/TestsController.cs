

using BLL.CRUD;
using BLL.Module;
using BLL.ViewModels;
using DAL;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [RoutePrefix("api")]
    public class TestsController : ApiController
    {
        /// <summary>
        /// שמירת מבחן
        /// </summary>
        /// <param name="test"></param>
        /// <returns></returns>
        [Route("SaveTest")]
        [HttpPost]
        public bool saveTest(TestVM test)
        {
            return TestModule.CreateTest(test);
        }

       /// <summary>
       /// מחזירה מבחנים לפי קטגוריה מסוימת
       /// </summary>
       /// <param name="categoryId"></param>
       /// <returns></returns>
        [Route("FilterByCategory")]
        [HttpPost]
        public List<TestVM> GetTests(int categoryId)
        {
            return TestModule.FilterByCategory(categoryId);
        }

        /// <summary>
        ///  IDמחזירה מבחן לפי
        /// </summary>
        /// <param name="testId"></param>
        /// <returns></returns>
        [Route("GetTestById")]
        [HttpPost]
        public TestVM GetTestById(int testId)
        {
            return TestModule.GetByTestId(testId);
        }

        /// <summary>
        ///ID מחזירה מבחן לתלמיד ע"פ
        /// </summary>
        /// <param name="testId"></param>
        /// <returns></returns>
        [Route("GetByTestIdForStudent")]
        [HttpPost]
        public TestForStudentVM GetByTestIdForStudent(int testId)
        {
            return TestModule.GetByTestIdForStudent(testId);
        }

        /// <summary>
        /// אישור פתיחת מבחן לתלמיד
        /// </summary>
        /// <param name="testId"></param>
        /// <param name="studentTZ"></param>
        /// <returns></returns>
        [Route("openTest")]
        [HttpGet]
        public bool openTest(int testId,string studentTZ)
        {
            return TestModule.openTest(testId,studentTZ);
        }

        /// <summary>
        /// הוספת רשימת תלמידים למבחן
        /// </summary>
        /// <param name="students"></param>
        /// <returns></returns>
        [Route("studentForTest")]
        [HttpPost]
        public bool studentForTest(StudentForTestVM[] students)
        {
            return TestModule.studentForTest(students);
        }

        /// <summary>
        /// מחזירה גליון ציונים
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("GetGradeChart/{id}")]
        [HttpGet]
        public List<MarkVM> GetGradeChart(int id)
        {
            return TestModule.GetGradeChart(id);
        }


    }
}