using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using Data;

namespace Business
{
    public class BAUser
    {
        public BAUser()
            : base()
        { }

        public enum LoginResult
        {
            Success,
            UsernameOrPasswordIncorrect
        }

        public LoginResult Login(string username, string password)
        {
            LoginResult result = LoginResult.Success;

            User user = new DAUser().GetUser(username);

            if (user == null || !user.Password.Equals(password)) result = LoginResult.UsernameOrPasswordIncorrect;

            return result;
        }
    }
}
