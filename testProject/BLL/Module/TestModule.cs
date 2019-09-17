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
    public static class TestModule
    {
        public static bool CreateTest(TestVM testvm)
        {
            using (checkTestEntities ctx = new checkTestEntities())
            {
                Test test=TestCRUD.CreateTest(ctx, testvm);
                foreach (var quest in testvm.questionArr)
                {
                    quest.categoryId = testvm.categoriId;
                    var question=QuestionCRUD.CreateQuestion(ctx, quest);
                    foreach (var ans in quest.Answers)
                    {
                        if(ans.answerDescription!=null)
                        AnswerCRUD.CreateAnswer(ctx, question, ans);
                    }
                    QuestionForTestCRUD.CreateQuestionForTest(ctx, question, test, quest.nikud);
                }
                ctx.SaveChanges();
                return true;
            }
        }

        public static TestVM GetByTestId(int testId)
        {

            using (checkTestEntities ctx = new checkTestEntities())
            {
                TestVM test = new TestVM();
                Test t = TestCRUD.ReadTestById(ctx, testId);
                test.name = t.name;
                test.testId = t.testId;
                test.categoriId = t.categoriId;
                test.questionArr = new List<QuestionVM>();
                foreach (var quenstion in t.QuestionforTests)
                {
                    List<Answer> answers = Entity.db.Answers.Where(ans => ans.questionId == quenstion.questionId).ToList();
                    List<AnswerVM> answersvm= new List<AnswerVM>();
                    foreach (var item in answers)
                    {
                        answersvm.Add(new AnswerVM() {
                            answerDescription = item.answerDescription,
                            answerId=item.answerId,
                            isCorrect=item.isCorrect
                        
                        });
                    }
                    test.questionArr.Add(new QuestionVM()
                    {
                        isPrivate = false,
                        questionDescription = quenstion.Question.questionDescription,
                        Answers = answersvm,
                        nikud = quenstion.nikod,
                        categoryId = quenstion.Question.categoriId,
                        questionId = quenstion.questionId
                    });
                    
                }
               
                return test;

            }
        }

        public static bool openTest(int testId, string studentTZ)
        {
            var x = Entity.db.StudentForCourses.FirstOrDefault(s => s.courseId == testId);

           // var x = Entity.db.StudentForCourses.FirstOrDefault(s => s.studentId == studentTZ && s.courseId == testId);
                if (x != null)
                return true;
            return false;

        }

        public static TestVM GetByCategory(int categoryId)
        {

            using (checkTestEntities ctx = new checkTestEntities())
            {
               TestVM test =new TestVM();
                Test t = TestCRUD.ReadOneTestByCat(ctx, categoryId);
                test.name = test.name;
                test.testId = t.testId;
               
                return test;

            }
           
        }

        public static List<TestVM> FilterByCategory(int catId)
        {
            using (checkTestEntities ctx = new checkTestEntities())
            {
                List<TestVM> testsList = new List<TestVM>();
                foreach (var test in TestCRUD.ReadTestByCat(ctx, catId))
                {
                    testsList.Add(new TestVM()
                    {
                        name = test.name,
                        testId = test.testId
                    });
                }
                return testsList;

            }
        }

        public static TestForStudentVM GetByTestIdForStudent(int testId)
        {

            using (checkTestEntities ctx = new checkTestEntities())
            {
                TestForStudentVM test = new TestForStudentVM();
                Test t = TestCRUD.ReadTestById(ctx, testId);
                test.title = t.name;
                test.testId = t.testId;
                test.questionArr = new List<QuestionForTestVM>();
                foreach (var quenstion in t.QuestionforTests)//מעבר על כל שאלות המבחן
                {
                    List<Answer> answers = Entity.db.Answers.Where(ans => ans.questionId == quenstion.questionId).ToList();
                    List<string> answersDes = new List<string>();
                    Answer selectedAnswer = answers.FirstOrDefault(ans => ans.isCorrect == true);
                    foreach (var item in answers)//תשובות של שאלה נוכחית
                    {
                        answersDes.Add(item.answerDescription);
                    }
                    test.questionArr.Add(new QuestionForTestVM()//המרת שאלה נוכחית  
                    {

                        questionDescription = quenstion.Question.questionDescription,
                        Answers = answersDes,
                        nikud = quenstion.nikod,
                        
                        //selectedAnswer =selectedAnswer.answerDescription

                    });
                }
                return test;

            }
        }

    }
}
