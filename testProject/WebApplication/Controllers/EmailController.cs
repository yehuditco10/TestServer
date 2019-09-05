

using BLL;
using BLL.ViewModels;
using DAL;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
   
    public class EmailController : ApiController
    {
        [HttpPost]
        public bool suggestQuestion(QuestionVM newQuestion)
        {
            int categoryid = newQuestion.categoryId;
            string category = Entity.db.Categories.FirstOrDefault(c => c.categoryId == categoryid).ToString();
            string htmlText = @"
                    <head> 
                        <style> 
                            body{background-color:cadetblue;direction:rtl;text-align:center;}
                            h1,h3,p{font-size:20px; text-align:center;color:blue;}
                        </style>
                    </head>
                    <body>";
            htmlText += "<h1>מנהל המאגר היקר  </h1><p>" + "הרי לפניך הצעת שאלה חדשה למאגר השאלות </p>" + "<h3>נושא השאלה :</h3>" + category + "<br/>" + "<h3>" + newQuestion.questionDescription + "</h3><br>";
            List<Answer> answers = Entity.db.Answers.Where(a => a.questionId == newQuestion.questionId).ToList();
            int num = 0;
            foreach (var item in answers)
            {
                htmlText += "<h4>תשובה   <p>" + ++num + item.answerDescription + " </p></h4>";
            }

            //htmlText += " <img src='cid:G:/ל סיון/C#IDEAL/GUI/UploadFile/.JPG'></body>";
           Class1.SendEmail(htmlText, "הצעת שאלה חדשה  ");

            return true;
        }
    }

}

