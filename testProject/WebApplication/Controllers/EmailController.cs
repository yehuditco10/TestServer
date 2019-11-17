

using BLL;
using BLL.CRUD;
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
            newQuestion.categoryId = 1;//TODO  
            //newQuestion.questionDescription = "תעבוד?";
            QuestionCRUD.CreateQuestion(Entity.db, newQuestion);//הוספת השאלה למאגר
            Question newq = Entity.db.Questions.FirstOrDefault(q => q.questionDescription == newQuestion.questionDescription);
            //newq.Answers = null;
            foreach (var ans in newQuestion.Answers)
            {
                if (ans.answerDescription != null)
                {
                    AnswerCRUD.CreateAnswer(Entity.db, newq, ans);//הוספת התשובות למאגר
                    newq.Answers.Add(Entity.db.Answers.FirstOrDefault(a => a.answerDescription == ans.answerDescription));
                }
            }

            //List<AnswerVM> answersvm = new List<AnswerVM>();
            //foreach (var a in newq.Answers)
            //{
            //    answersvm.Add(new AnswerVM()
            //    {
            //        answerDescription = a.answerDescription,
            //        answerId = a.answerId,
            //        isCorrect = a.isCorrect
            //    });
            //}
            //newQuestion = new QuestionVM()
            //{
            //    questionDescription = newq.questionDescription,
            //    Answers = answersvm,
            //    categoryId = newq.categoriId,
            //    isPrivate = newq.isPrivate,
            //    nikud = 0,
            //    questionId = newq.questionId,
            //    teacherId = 25//to change
            //};
            
            //if (Entity.db.Questions.FirstOrDefault(q => newQuestion.questionId == q.questionId) == null)
            //{
            //    newQuestion.categoryId = 1;//TODO  
            //    newQuestion.questionDescription = "מה איתך?";
            //    questionid = 18;
            //}
            //else
            //{
            //
           // newQuestion.categoryId = 1;//TODO 
              //  questionid = Entity.db.Questions.FirstOrDefault(q => newq.questionId == q.questionId).questionId;
           // }

            Entity.db.SaveChanges();
      //      int categoryid = newq.categoriId;

            //int questionid = Entity.db.Questions.FirstOrDefault(q => newQuestion.questionId == q.questionId).questionId;
           // string category = "מתמטיקה";//לשנותתת - זה נפל פה!!!
            //string category = Entity.db.Categories.FirstOrDefault(c => c.categoryId == categoryid).ToString();

            string htmlText = @"
                    <head> 
                        <style> 
                            body{background-color:cadetblue;direction:rtl;text-align:center;}
                            h1,h3,p{font-size:20px; text-align:center;color:blue;}
                        </style>
                    </head>
                    <body>";
            htmlText += "<h1>מנהל המאגר היקר  </h1><p>" + "הרי לפניך הצעת שאלה חדשה למאגר השאלות </p>" + "<h3>נושא השאלה :" + newq.categoriId + "</h3></br><h3> " + newq.questionDescription + " </h3></br>";
            List<Answer> answers = Entity.db.Answers.Where(a => a.questionId == newq.questionId).ToList();
            int num = 0;
            foreach (var item in newq.Answers)
            {
                htmlText += "<h4>תשובה   " + ++num +". <p>"+ item.answerDescription + " </p></h4>";
            }
            htmlText += "</br><a href='http://localhost:4200/Questionauto/" + newq.questionId + "'>הוסף עכשיו</a>";
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

