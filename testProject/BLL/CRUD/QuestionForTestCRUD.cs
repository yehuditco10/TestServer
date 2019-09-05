using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.CRUD
{
    public static class QuestionForTestCRUD
    {
        public static void CreateQuestionForTest(checkTestEntities ctx, Question question,Test test,int nikud)
        {
            ctx.QuestionforTests.Add(new QuestionforTest()
            {
                Question = question,
                nikod = nikud,
                Test=test
            });
        }
    }
}
