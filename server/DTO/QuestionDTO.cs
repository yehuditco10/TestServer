using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class QuestionDTO
    {

    

        public int questionId { get; set; }
        public string questionDescription { get; set; }
        public Nullable<int> categoriId { get; set; }
        public Nullable<int> teacherId { get; set; }
        public Nullable<bool> @private { get; set; }
        public Nullable<int> levelQuestion { get; set; }

        public static QuestionDTO ToDto(DAL.Question q)
        {
            return new QuestionDTO() { questionDescription =q.questionDescription, levelQuestion=q.levelQuestion,questionId=q.questionId,categoriId=q.categoriId,teacherId=q.teacherId};
        }

        public static DAL.Question ToQuestion(QuestionDTO q)
        {
            return new DAL.Question() {questionDescription = q.questionDescription, levelQuestion = q.levelQuestion, questionId = q.questionId };
        }

    }
}
