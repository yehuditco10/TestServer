﻿using BLL;
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
        [System.Web.Http.Route("getQuestionForCat/{categoryId}")]
        [HttpGet]
        public IHttpActionResult getQuestionForCat(int categoryId = 0)
        {
           
            return Ok(Class1.getQuestionForCat(categoryId));
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
        [Route("Forgotpassword")]
        [HttpPost]
        public static bool Forgotpassword()
        {
            int id = 1;
            Teacher teacher = null;
            string emailAddress = null;
            string password = "";
            teacher = Entity.db.Teachers.FirstOrDefault(t => t.teacherId == id);
            if (teacher != null)//אם יש כזו מורה
            {
                emailAddress = teacher.email;
                password = teacher.teacherPassword;
                string htmlText = @"
                    <head> 
                        <style> 
                            body{background-color:cadetblue;direction:rtl;text-align:center;}
                            h1,h3,p{font-size:20px; text-align:center;color:blue;}
                        </style>
                    </head>
                    <body>";
                htmlText += "<h1>הסיסמא שלך היא   </h1><br/><h3>" + password + "</h3><br><a href='http://localhost:4200/login'>לחזרה לאתר</a><br>";
                htmlText += "</body>";
                Class1.SendEmail(htmlText, "שחזור סיסמא  ");
                return true;
            }
            return false;

        }
    }
}