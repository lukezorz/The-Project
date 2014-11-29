using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;

namespace Data
{
    public class DAUser : Connection
    {
        public DAUser()
            : base()
        { }

        public User GetUser(string username)
        {
            User user = Entities.Users.SingleOrDefault(u => u.Username == username);
            return user;
        }
    }
}
