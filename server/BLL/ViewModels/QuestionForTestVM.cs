using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
  public  class QuestionForTestVM
    {
        public string questionDescription { get; set; }
        public int nikud { get; set; }
        public List<String> Answers { get; set; }
        public string selectedAnswer { get; set; }
       
    }
}
