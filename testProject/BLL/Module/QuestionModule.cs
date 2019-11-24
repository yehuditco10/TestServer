using BLL.CRUD;
using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class QuestionModule
    {
        /// <summary>
        /// יצירת שאלה
        /// </summary>
        /// <param name="question"></param>
        /// <returns></returns>
        public static bool CreateQuestion(QuestionVM question,int userId)
        {
            using (var ctx = new testitprojectEntities())
            {
                var q = QuestionCRUD.CreateQuestion(ctx, question,userId);
                foreach (var ans in question.Answers)
                {
                    AnswerCRUD.CreateAnswer(ctx, q, ans);
                }
                ctx.SaveChanges();
                return true;
            }
        }

        public static object publicQuestion(int id)
        {
            using (var ctx = new testitprojectEntities())
            {
                if (ctx.Questions.FirstOrDefault(q => q.questionId == id) != null)
                {
                    ctx.Questions.FirstOrDefault(q => q.questionId == id).isPrivate = false;
                    ctx.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}
