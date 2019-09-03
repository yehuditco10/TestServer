using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class StudentDTO
    {
        public int studentId { get; set; }
        public string studentName { get; set; }
        public Nullable<int> classId { get; set; }
        public string password { get; set; }

        public static StudentDTO ToDto(DAL.student s)
        {
            return new StudentDTO() { classId = s.classId, password = s.password, studentId = s.studentId, studentName = s.studentName };
        }
        public static DAL.student ToStudent(StudentDTO s)
        {
            return new DAL.student() { classId = s.classId, password = s.password, studentId = s.studentId, studentName = s.studentName };
        }
    }
}
