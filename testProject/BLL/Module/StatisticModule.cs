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
        /// <summary>
        /// סטטיסטיקת ציונים
        /// </summary>
        /// <param name="testid"></param>
        /// <returns></returns>
        public static List<StaticMark> getStaticMark(int testid)
        {
            var ls = new List<StaticMark>();
            int min = Entity.db.TestForStudents.Min(m => m.mark);
            for(int i=min; i<100+5; i+=5)
            {
                var num = Entity.db.TestForStudents.Where(test => test.mark >= i && test.mark <= (i + 5)).Count();
                ls.Add(new StaticMark()
                {
                    name = i + "-" + (i + 5),
                    y = num
                });
            }
            return ls;
        }
    }
}
