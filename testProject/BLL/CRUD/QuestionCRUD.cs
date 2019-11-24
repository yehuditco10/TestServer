using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.CRUD
{
    public static class QuestionCRUD
    {
        public static Question CreateQuestion(testitprojectEntities ctx, QuestionVM question, int userId)
        {
            var newQ = new Question()
            {
                categoriId = question.categoryId,
                createById = userId,
                questionDescription = question.questionDescription,
                isPrivate = question.isPrivate//TODO create permission and then change    
            };
            ctx.Questions.Add(newQ);
            ctx.SaveChanges();
            return newQ;
        }
    }
}

