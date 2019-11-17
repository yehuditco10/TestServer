using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL.ViewModels;
using DAL;

namespace BLL.CRUD
{
    public static class AnswerCRUD
    {
        public static void CreateAnswer(testitprojectEntities ctx, Question q, AnswerVM ans)
        {
            ctx.Answers.Add(new Answer()
            {
                answerDescription = ans.answerDescription,
                isCorrect=ans.isCorrect,
                Question = q
            });
            ctx.SaveChanges();
        }
    }
}
