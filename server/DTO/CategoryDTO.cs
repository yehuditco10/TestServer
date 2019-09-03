using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class CategoryDTO
    {
        public int categoryId { get; set; }
        public string categoryName { get; set; }
        public Nullable<int> parentCategoryId { get;set;}

        public static CategoryDTO ToDto(DAL.Category c)
        {
            return new CategoryDTO() {  categoryId=c.categoryId, categoryName = c.categoryName, parentCategoryId=c.parentCategoryId};
        }

        public static DAL.Category ToCategory(CategoryDTO c)
        {
            return new DAL.Category() { categoryId = c.categoryId, categoryName = c.categoryName, parentCategoryId = c.parentCategoryId, };
        }
    }


}

