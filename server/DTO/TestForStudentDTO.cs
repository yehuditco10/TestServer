using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class TestForStudentDTO
    {
        public int testId { get; set; }
        public Nullable<int> studentId { get; set; }
        public Nullable<int> mark { get; set; }
         public static TestForStudentDTO toDto(DAL.TestForStudent t)
        {
            return new TestForStudentDTO() { mark = t.mark, studentId = t.studentId, testId = t.testId };
        }
        public static DAL.TestForStudent toTestForStudent(TestForStudentDTO t)
        {
            return new DAL.TestForStudent() { mark = t.mark, studentId = t.studentId, testId = t.testId };
        }

    }
}
