using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL.ViewModels;
using DAL;
namespace BLL.CRUD
{
    public static class TestCRUD
    {
        public static Test CreateTest(testitprojectEntities ctx, TestVM test_vm)
        {
            Test test = new Test()
            {
                categoriId = test_vm.categoriId,
                link = @"http://localhost:4200/test/",
                teacherId = 25,
                name = test_vm.name
            };//active route
            ctx.Tests.Add(test);
            ctx.SaveChanges();//in order to get the id
            test.link +=test.testId;
            ctx.SaveChanges();
            return test;
        }
        public static void FinishTest(Test test)
        {
        }
        public static List<Test> ReadTestByCat(testitprojectEntities ctx, int categoryId)
        {
            List<Test> tests = ctx.Tests.Where(t => t.categoriId == categoryId).ToList();
            return tests;
        }
        public static Test ReadOneTestByCat(testitprojectEntities ctx, int categoryId)
        {
            Test tests = ctx.Tests.FirstOrDefault(t => t.categoriId == categoryId);
            return tests;
        }

        public static Test ReadTestById(testitprojectEntities ctx, int testId)
        {
            Test tests = ctx.Tests.FirstOrDefault(t => t.testId == testId);
            return tests;
        }
        public static Test GetByTestIdForStudent(testitprojectEntities ctx, int testId)
        {
            Test tests = ctx.Tests.FirstOrDefault(t => t.testId == testId);
            return tests;
        }
        public static Question GetByQuestionForManager(testitprojectEntities ctx, int questionId)
        {
            Question question = ctx.Questions.FirstOrDefault(q => q.questionId == questionId);
            return question;
        }
    }
}
