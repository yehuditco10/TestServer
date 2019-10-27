﻿using BLL.CRUD;
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
            using (testitprojectEntities ctx = new testitprojectEntities())
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

            using (testitprojectEntities ctx = new testitprojectEntities())
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

        public static Boolean studentForTest(StudentForTestVM[] students)
        {
          
            
            foreach (var student in students)
            {
                Entity.db.StudentForCourses.Add(new StudentForCourse()
                {
                   
                    password = student.password,
                    tz = student.tz

                });
                Entity.db.SaveChanges();
            }
            Entity.db.SaveChanges();
            return true;
        }

        public static bool openTest(int testId, string studentTZ)
        {
            //------------!!!!!!!!!!!!להחזיר את זה
            //  var x = Entity.db.StudentForCourses.FirstOrDefault(s => s.courseId == testId);
            var x = 1;
           // var x = Entity.db.StudentForCourses.FirstOrDefault(s => s.studentId == studentTZ && s.courseId == testId);
                if (x != null)
                return true;
            return false;

        }

        public static TestVM GetByCategory(int categoryId)
        {

            using (testitprojectEntities ctx = new testitprojectEntities())
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
            using (testitprojectEntities ctx = new testitprojectEntities())
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

            using (testitprojectEntities ctx = new testitprojectEntities())
            {
                TestForStudentVM test = new TestForStudentVM();
                Test t = TestCRUD.ReadTestById(ctx, testId);
                test.title = t.name;
                test.testId = t.testId;
                test.questionArr = new List<QuestionForTestVM>();
             List<QuestionforTest>r= RandomQuestions(t.QuestionforTests.ToList());
                foreach (var quenstion in r)//מעבר על כל שאלות המבחן
                {
                    List<Answer> answers = Entity.db.Answers.Where(ans => ans.questionId == quenstion.questionId).ToList();
                    List<AnswerVM> answersVM = new List<AnswerVM>();
                    Answer selectedAnswer = answers.FirstOrDefault(ans => ans.isCorrect == true);
                    foreach (var item in answers)//תשובות של שאלה נוכחית
                    {
                        answersVM.Add(new AnswerVM() {
                            answerDescription=item.answerDescription,
                            answerId=item.answerId,
                            isCorrect=item.isCorrect
                        });
                    }
                    test.questionArr.Add(new QuestionForTestVM()//המרת שאלה נוכחית  
                    {

                        questionDescription = quenstion.Question.questionDescription,
                        Answers = answersVM,
                        nikud = quenstion.nikod,
                        
                        //selectedAnswer =selectedAnswer.answerDescription

                    });
                }
                return test;

            }
        }

        private static List<QuestionforTest> RandomQuestions(List<QuestionforTest> questionforTests)
        {
            int num = 0;
            Random rnd = new Random();
            List<QuestionforTest> randQuestions = new List<QuestionforTest>();
            for (int i = questionforTests.Count(); i >0; i--)
            {
                num= rnd.Next(0, i);
                randQuestions.Add(questionforTests[num]);
                questionforTests.Remove(questionforTests[num]);

            }
            return randQuestions; ;
        }
    }
}