using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
   public  class TestVM
    {
        public int testId { get; set; }
        public string name { get; set; }
        public int categoriId { get; set; }

        public List<QuestionVM> questionArr { get; set; }

    }
}
