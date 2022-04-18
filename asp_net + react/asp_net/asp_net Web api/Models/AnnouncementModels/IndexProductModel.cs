using asp_net_Web_api.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp_net_Web_api.Models.ProductModels
{
    public class IndexProductModel
    {
        public IEnumerable<Product> Products { get; set; }
    }
}
