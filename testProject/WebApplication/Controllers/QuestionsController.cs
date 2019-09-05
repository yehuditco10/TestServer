using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using DAL;
using BLL.ViewModels;
using BLL.Module;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api")]
    public class QuestionsController : ApiController
    {

       // מחזיר שאלות מהמאגר לפי הקטגוריה שנבחרה
        [System.Web.Http.Route("getQuestions/{categoryId}")]
        [HttpGet]
        public IHttpActionResult GetQuestions(int categoryId=0)

        {
            if(categoryId==0)
                return Ok(Class1.GetAllQuestion());
            return Ok(Class1.GetQuestion(categoryId));
            //Category categoryId = null
            //if (category == null)
            //    return Ok(Class1.GetAllQuestion());
            //int categoryId = 0;
            //categoryId = Entity.db.Categories.FirstOrDefault(c => c == category).categoryId;
            //return Ok(Class1.GetQuestion(categoryId));
        }
        [Route("getQuestions1")]
        [HttpGet]
        public IHttpActionResult getQuestions1()
        {
            return Ok(Class1.getQuestion1());
        }
        //מחזיר את האפשריות של השאלה
        [System.Web.Http.Route("GetAnswers/{questionId}")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAnswers(int questionId)
        {
            return Ok(Class1.GetAnswers(questionId));
        }
        [Route("addNewQuestion")]
        [HttpPost]
        public IHttpActionResult addNewQuestion(QuestionVM question)
        {
            
            return Ok(QuestionModule.CreateQuestion(question));
        }
       
    }
}