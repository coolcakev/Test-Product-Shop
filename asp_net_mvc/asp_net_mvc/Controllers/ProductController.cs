using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using asp_net_mvc.Entity;
using asp_net_mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using asp_net_mvc.Service;
using asp_net_mvc.Models.ProductModels;

namespace asp_net_mvc.Controllers
{
    [Route("")]
    [Route("[controller]")]
    public class ProductController : Controller
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
        [Route("")]
        [HttpGet("Index")]
        public IActionResult Index()
        {
            var model = new IndexProductModel();

            return View(model);
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
