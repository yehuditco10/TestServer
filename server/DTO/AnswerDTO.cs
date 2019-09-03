using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class AnswerDTO
    {
        public int answerId { get; set; }
        public string answerDescription { get; set; }
        public Nullable<int> questionId { get; set; }
        public Nullable<bool> correct { get; set; }

        public static AnswerDTO ToDto(DAL.Answer a)
        {
            return new AnswerDTO() { answerId=a.answerId,answerDescription=a.answerDescription,correct=a.correct,questionId=a.questionId };
        }

        public static DAL.Answer ToAnswers(AnswerDTO a)
        {
            return new DAL.Answer() { answerId = a.answerId,answerDescription=a.answerDescription,correct=a.correct,questionId=a.questionId};
        }
        
    }
}
