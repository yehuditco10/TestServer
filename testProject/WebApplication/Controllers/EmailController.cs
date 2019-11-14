

using BLL;
using BLL.ViewModels;
using DAL;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [RoutePrefix("api")]
    public class EmailController : ApiController
    {
        /// <summary>
        /// הצעת שאלה חדשה למאגר
        /// </summary>
        /// <param name="newQuestion"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("email/suggestQuestion")]
        public bool suggestQuestion(QuestionVM newQuestion)
        {
            int categoryid = newQuestion.categoryId;
            int questionid = Entity.db.Questions.FirstOrDefault(q => newQuestion.questionId == q.questionId).questionId;
            string category = "מתמטיקה";//לשנותתת - זה נפל פה!!!
            //string category = Entity.db.Categories.FirstOrDefault(c => c.categoryId == categoryid).ToString();

            string htmlText = @"
                    <head> 
                        <style> 
                            body{background-color:cadetblue;direction:rtl;text-align:center;}
                            h1,h3,p{font-size:20px; text-align:center;color:blue;}
                        </style>
                    </head>
                    <body>";
            htmlText += "<h1>מנהל המאגר היקר  </h1><p>" + "הרי לפניך הצעת שאלה חדשה למאגר השאלות </p>" + "<h3>נושא השאלה :</h3>" + category + "<br/>" + "<h3>" + newQuestion.questionDescription + "</h3><br><a href='http://localhost:4200/Questionauto/"+questionid+">הוסף עכשיו</a><br>";
            List<Answer> answers = Entity.db.Answers.Where(a => a.questionId == newQuestion.questionId).ToList();
            int num = 0;
            foreach (var item in answers)
            {
                htmlText += "<h4>תשובה   <p>" + ++num + item.answerDescription + " </p></h4>";
            }
            htmlText += "</body>";
            //htmlText += " <img src='cid:G:/ל סיון/C#IDEAL/GUI/UploadFile/.JPG'></body>";
            Class1.SendEmail(htmlText, "הצעת שאלה חדשה  ");

            return true;
        }

        /// <summary>
        /// פונקציה לשחזור סיסמא
        /// </summary>
        /// <returns></returns>
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

