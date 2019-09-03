using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
   public class TestForStudentVM
    {
        public int testId { get; set; }
        public string title { get; set; }
        public List<QuestionForTestVM> questionArr { get; set; }
        public int studentId { get; set; }
        public DateTime dateStart { get; set; }

    }
}
