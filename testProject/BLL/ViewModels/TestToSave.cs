using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.ViewModels
{
   public class TestToSave
    {
        public int testId { get; set; }
        public int studentId { get; set; }
        public int mark { get; set; }
        public DateTime dateStart { get; set; }
        public string url { get; set; }
    
    }
}
