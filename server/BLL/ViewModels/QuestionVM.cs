using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
    public class QuestionVM
    {
        public int questionId { get; set; }
        public string questionDescription { get; set; }
        public int categoryId { get; set; }
        public int teacherId { get; set; }
        public bool isPrivate { get; set; }
        public int nikud { get; set; }
        public List<AnswerVM> Answers { get; set; }

        public Question ToQuestion() {
            return new Question
            {
                categoriId = this.categoryId,
                //createById=question.c
                isPrivate = this.isPrivate,
                questionDescription = this.questionDescription
            };
        }
    }
}
