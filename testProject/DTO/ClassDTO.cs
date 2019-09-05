using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class ClassDTO
    {

        public int classId { get; set; }
        public string className { get; set; }
        public static ClassDTO ToDto(DAL.Class c)
        {
            return new ClassDTO() { classId = c.classId, className = c.className };
        }
        public static DAL.Class ToClass(ClassDTO c)
        {
            return new DAL.Class() { classId = c.classId, className = c.className };
        }
    }
}
