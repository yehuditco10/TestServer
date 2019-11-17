using DAL;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication
{
    public class MyAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            using (testitprojectEntities ctx = new testitprojectEntities())
            {
                var user =ctx.Teachers.FirstOrDefault(p => p.teacherName == context.UserName && p.teacherPassword == context.Password);
                if (user != null)
                {
                    identity.AddClaim(new Claim("UserId", user.teacherId.ToString()));
                    context.Validated(identity);
                }
                else
                {
                    context.SetError("invalid_grant", "Provided username and password is incorrect");
                    context.Rejected();
                }
            }
        }
    }
}
