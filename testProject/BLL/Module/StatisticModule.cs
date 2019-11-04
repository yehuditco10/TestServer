using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
   public static class StatisticModule
    {
        //public static class StatisticModule
        //{

        //    public static List<ModelStatisticA> StatisticA()
        //    {
        //        using (var ctx = new testitprojectEntities())
        //        {
        //            var ls = new List<ModelStatisticA>();
        //            var categoriesList = ctx.Categories.ToList();
        //            foreach (var category in categoriesList)
        //            {
        //                var questionsNumber = ctx.Questions.Where(i => i.categoriId == category.categoryId).Count();
        //                ls.Add(new ModelStatisticA()
        //                {
        //                    name = category.categoryName,
        //                    y = questionsNumber
        //                });
        //            }
        //            return ls;
        //        }

        //    }
        //}
        public static List<StaticMark> getStaticMark(int testid)
        {
            var ls = new List<StaticMark>();
            int min = Entity.db.TestForStudents.Min(m => m.mark);
            for(int i=min; i<100+5; i+=5)
            {
                var num = Entity.db.TestForStudents.Where(test => test.mark >= i && test.mark <= (i + 5)).Count();
                ls.Add(new StaticMark()
                {
                    name = i + "-" + i + 5,
                    y = num
                });
            }
            return ls;
        }
    }
}
