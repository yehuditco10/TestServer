using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
    public class AnswerVM
    {
        public int answerId { get; set; }
        public string answerDescription { get; set; }
        public bool isCorrect { get; set; }
    }
}
