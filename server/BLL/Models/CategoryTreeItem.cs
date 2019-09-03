using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Models
{
    public class CategoryTreeItem
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<CategoryTreeItem> children { get; set; }
    }
}
