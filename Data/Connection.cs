using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using System.Configuration;

namespace Data
{
    public class Connection
    {
        public DataCubeEntities Entities { get; set; }

        public Connection()
        {
            Entities = new DataCubeEntities();
        }
    }
}
