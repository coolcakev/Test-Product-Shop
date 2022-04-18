using asp_net_Web_api.Models.ProductModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using asp_net_Web_api.Entity;
using asp_net_Web_api.Models;
using asp_net_Web_api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp_net_Web_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet("GetProducts")]
        public IEnumerable<GetProductProductItem> GetProducts()
        {
            var products = _productService.GetProducts();
            return products;
        }     
        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] CreateProductModel model)
        {
          
            await _productService.Create(model);
            return Ok();
        }

        [HttpPost("Delete/{productId}")]
        public async Task<IActionResult> Delete(int productId)
        {
            await _productService.Delete(productId);
            return Ok();
        }

        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] UpdateProductModel model)
        {
            await _productService.Update(model);
            return Ok();
        }


    }
}
