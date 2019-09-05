using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public static class Class1
    {


        public static bool Enter(Teacher t)
        {
           
            //  DAL.Teacher d = Entity.db.Teachers.ToList().FirstOrDefault(t => t.teacherPassword == password);
            if (Entity.db.Teachers.Where(p => p.teacherName == t.teacherName && p.teacherPassword == t.teacherPassword).ToList().Count() > 0)
                return true;
            return false;
        }

       

        public static int Signin(Teacher t)
        {
            Teacher m = null;
            m = Entity.db.Teachers.FirstOrDefault(p => p.teacherName == t.teacherName && p.teacherPassword == t.teacherPassword);
            if (m != null)
                if (m.isManager == true)//is manager
                    return 1;
                else
                    return 0;//user found
            return -1;//not found
        }

        public static void AddCategories(int id, string categoryName)
        {
            Entity.db.Categories.Add(new Category() { categoryName = categoryName, parentCategoryId = id });
            Entity.db.SaveChanges();
        }

        public static object GetAllQuestion()
        {
            return Entity.db.Questions.ToList();
        }

        public static bool Register(Teacher t)
        {

            //  DAL.Teacher d = Entity.db.Teachers.ToList().FirstOrDefault(t => t.teacherPassword == password);
            if (Entity.db.Teachers.Where(p => p.teacherName == t.teacherName && p.teacherPassword == t.teacherPassword &&p.email==t.email).ToList().Count() > 0)//mail להוסיף
                return false;
            else
            {
                Entity.db.Teachers.Add(t);
                Entity.db.SaveChanges();
            }
            return true;
        }

        public static bool addNewQuestion(QuestionVM question)
        {
           // Question q=new Question() {
           // categoriId=q,
           // };
           //Entity.db.Questions.Add(question);
           // Entity.db.Answers.AddRange(question.Answers);
           // Entity.db.SaveChanges();
            return true;
        }

        public static List<Category> GetCategories()
        {
         

            return Entity.db.Categories.OrderBy(c => c.categoryName).ToList();

        }

        public static List<Question> GetAnswers(int questionId)
        {
            return Entity.db.Questions.ToList();
        }

        public static List<Question> GetQuestion(int categoryId)
        {
            List<Question> lq = new List<Question>();//רשימת שאלות של תתי קטגוריות
            List<Question> l = new List<Question>();
            List<Category> lc = new List<Category>();
            lc = Entity.db.Categories.Where(c => categoryId == c.parentCategoryId).ToList();//תתי קטגוריות
            if (lc.Count!= 0)
                foreach (var item in lc)
                {
                    var questions = Entity.db.Questions.Where(q => q.categoriId == item.categoryId).ToList();
                    lq.AddRange(questions);
                }
            //var parentId = Entity.db.Categories.FirstOrDefault(c =>c.parentCategoryId!=null && c.parentCategoryId != categoryId)();
            l = Entity.db.Questions.Where(q => q.categoriId == categoryId /*||q.parentCategoryId==categoryId*/ ).ToList();
            if (lc.Count > 0)//יש תתי שאלות
            {
               //יש שאלות אב
                    l.AddRange(lq);
            }
               if (l.Count > 0)
                        return l;
                return null;
            }
            public static object getQuestion1()
            {
                List<Question> lq = null;
                lq = Entity.db.Questions.ToList();
                if (lq != null)
                    return lq;
                return null;
            }
        static string fromMail = "secondhandwolfst@gmail.com";
        static string ToMail = "secondhandwolfst@gmail.com";
        public static MailMessage SendEmail(string htmlText, string subject)
        {
            try
            {

                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = new System.Net.NetworkCredential("secondhandwolfst@gmail.com", "wolfst4569");// Enter senders User name and password
                AlternateView plainView = AlternateView
.CreateAlternateViewFromString("Some plaintext", Encoding.UTF8, "text/plain");
                // We have something to show in real old mail clients.
                smtp.EnableSsl = true;
                //if (toMail == "")
                //    toMail = ToMail;
                MailMessage mail = new MailMessage(fromMail, ToMail, subject, htmlText);
                mail.AlternateViews.Add(plainView);

                AlternateView htmlView =
                   AlternateView.CreateAlternateViewFromString(htmlText, Encoding.UTF8, "text/html");
                mail.AlternateViews.Add(htmlView); // And a html attachment to make sure.
                mail.IsBodyHtml = true;
                mail.BodyEncoding = UTF8Encoding.UTF8;
                //mail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;

                smtp.Send(mail);
                return new MailMessage();
            }
            catch (Exception ex)
            {
                var x = ex.Message;
                return new MailMessage();

            }
        }
    }
    }
