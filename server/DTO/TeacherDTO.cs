using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class TeacherDTO
    {
        public int teacherId { get; set; }
        public string teacherName { get; set; }
        public string teacherPassword { get; set; }
        public virtual List<QuestionDTO> Questions { get; set; }
        public static TeacherDTO ToDto(DAL.Teacher t)
        {
            return new TeacherDTO() { teacherId = t.teacherId, teacherName = t.teacherName, teacherPassword = t.teacherPassword };
        }
        public static DAL.Teacher ToTeacher(TeacherDTO t)
        {
            return new DAL.Teacher() { teacherId = t.teacherId, teacherName = t.teacherName, teacherPassword = t.teacherPassword };
        }

    }
}
