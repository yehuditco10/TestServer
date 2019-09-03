using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
   public class Tests
    {
        
        public static void saveTest(TestVM questionId)
        {
             Entity.db.Questions.ToList();
        }
    }
}
