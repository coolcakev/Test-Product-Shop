using asp_net_mvc.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp_net_mvc.Models.ProductModels
{
    public class CreateProductModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
    }

}
