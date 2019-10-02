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
        public static bool CreateQuestion(QuestionVM question)
        {
            using (var ctx = new testitprojectEntities())
            {
                var q=QuestionCRUD.CreateQuestion(ctx, question);
                foreach (var ans in question.Answers)
                {
                    AnswerCRUD.CreateAnswer(ctx, q, ans);
                }
                ctx.SaveChanges();
                return true;
            }
        }
    }
}
