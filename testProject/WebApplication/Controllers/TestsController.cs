

using BLL.CRUD;
using BLL.Module;
using BLL.ViewModels;
using DAL;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication.Models;

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
            var prinicpal = (ClaimsPrincipal)Thread.CurrentPrincipal;
            var userId = prinicpal.Claims.Where(c => c.Type == "UserId").Select(c => c.Value).SingleOrDefault().ToString();
            return TestModule.CreateTest(test,int.Parse(userId));
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
            var prinicpal = (ClaimsPrincipal)Thread.CurrentPrincipal;
            var userId = prinicpal.Claims.Where(c => c.Type == "UserId").Select(c => c.Value).SingleOrDefault().ToString();
            return TestModule.FilterByCategory(categoryId,int.Parse(userId));
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
        public TestForStudentVM GetByTestIdForStudent(StudentAndTestId model)
        {
            return TestModule.GetByTestIdForStudent(model.testId,model.studentId);
        }

        /// <summary>
        ///ID מחזירה שאלה למנהל
        /// </summary>
        /// <param name="testId"></param>
        /// <returns></returns>
        [Route("GetByQuestionForManager/{questionId}")]
        [HttpGet]
        public QuestionVM GetByQuestionForManager(int questionId)
        {
            return TestModule.GetByQuestionForManager(questionId);
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
        [Route("TestSaved")]
        [HttpPost]
        public bool TestSaved(TestToSave test)
        {
            return TestModule.TestSaved(test);
        }
        //TestSaved
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

        /// <summary>
        /// מחזירה לינק למבחן
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("getLink/{id}")]
        [HttpGet]
        public string getLink(int id)
        {
            return TestModule.getLink(id);
        }
        

    }
}