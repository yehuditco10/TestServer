using BLL.ViewModels;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Module
{
    public static class UserModule
    {
        public static UserVM GetUserDetailById(string id)
        {
            using (testitprojectEntities ctx = new testitprojectEntities())
            {
                var user = ctx.Teachers.FirstOrDefault(p => p.teacherId.ToString() == id);
                return new UserVM()
                {
                    Id = user.teacherId,
                    email = user.email,
                    isManager = user.isManager!=null? (bool)user.isManager:false,
                    Name = user.teacherName
                };
            }
        }
    }
}
