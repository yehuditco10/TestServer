using BLL.CRUD;
using BLL.Models;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class CategoryTreeModule
    {
        /// <summary>
        ///פונקציה המחזירה עץ המורכב מכל הקטגוריות
        /// </summary>
        /// <returns></returns>
        public static List<CategoryTreeItem> GetCategoryTree()
        {
            using (var ctx = new testitprojectEntities())
            {
                var categoriesList = CategoryCRUD.GetAllCategories(ctx);
                List<CategoryTreeItem> categoryTreeList = new List<CategoryTreeItem>();
                categoryTreeList.Add(new CategoryTreeItem()
                {
                    id = 0,
                    name = "all",
                    children = new List<CategoryTreeItem>()
                });

                GetAllCategortTree(categoriesList, null, categoryTreeList[0]);
                return categoryTreeList;
            }
        }

        /// <summary>
        /// עץ  קטגוריות 
        /// </summary>
        /// <param name="categoriesList"></param>
        /// <param name="id"></param>
        /// <param name="categoryTree"></param>
        private static void GetAllCategortTree(List<Category> categoriesList,int? id,CategoryTreeItem categoryTree)
        {
            var childCategories = categoriesList.Where(i => i.parentCategoryId == id)
                .OrderBy(i=>i.categoryName).ToList();
            foreach (var category in childCategories)
            {
                var cat = new CategoryTreeItem()
                {
                    id = category.categoryId,
                    name = category.categoryName,
                    children = new List<CategoryTreeItem>()
                };
                categoryTree.children.Add(cat);
                GetAllCategortTree(categoriesList, category.categoryId, cat);
            }
        }
    }
}
