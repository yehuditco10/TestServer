using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class TestDTO
    {

        public int testId { get; set; }
        public int teacherId { get; set; }
        public string link { get; set; }
        public Nullable<int> categoriId { get; set; }

        public static TestDTO ToDto(DAL.Test t)
        {
            return new TestDTO() { testId=t.testId,link=t.link,teacherId=t.teacherId,categoriId=t.categoriId };
        }

        public static DAL.Test ToTest(TestDTO t)
        {
            return new DAL.Test() { testId = t.testId, link = t.link, teacherId = t.teacherId, categoriId = t.categoriId };
        }

    }
}
