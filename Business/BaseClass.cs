using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using Data;

namespace Business
{
    public class BaseClass
    {
        public DataCubeEntities Entities { get; set; }
        public BaseClass()
        {
            Connection conn = new Connection();
            this.Entities = conn.Entities;
        }
    }
}
