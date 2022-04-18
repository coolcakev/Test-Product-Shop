using asp_net_Web_api.Models.ProductModels;
using asp_net_Web_api.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using asp_net_Web_api.Helpers;

namespace asp_net_Web_api.Services
{
    public interface IProductService
    {
        IEnumerable<GetProductProductItem> GetProducts();
        Task Create(CreateProductModel model);
        Task Update(UpdateProductModel model);
        Task Delete(int productId);
    }
    public class ProductService : IProductService
    {
        private readonly ApplicationContext _repository;

        public ProductService(ApplicationContext repository)
        {
            _repository = repository;
        }

        public async Task Create(CreateProductModel model)
        {
            if (string.IsNullOrEmpty(model.Title))
                return;

            if (string.IsNullOrEmpty(model.Description))
                return;

            var templateForCurrency = new Regex(@"\d*(,\d+)|\d*\d");
            var isPriceMatched = templateForCurrency.IsMatch(model.Price);
            if (!isPriceMatched)
                return;

            var product = new Product
            {
                CreationDate = DateTime.Now,
                Description = model.Description,
                Title = model.Title,
                Price = DecimalHelper.GetDecimal(model.Price, 0)
            };

            await _repository.AddAsync(product);
            await _repository.SaveChangesAsync();
        }

        public async Task Delete(int productId)
        {
            var product = _repository.Products.SingleOrDefault(product => product.Id == productId);
            _repository.Remove(product);
            await _repository.SaveChangesAsync();
        }

        public IEnumerable<GetProductProductItem> GetProducts()
        {
            var products = _repository.Products.ToList();
            var getProductProductItems = new List<GetProductProductItem>();
            foreach (var product in products)
            {
                var getProductProductItem = new GetProductProductItem()
                {

                    Id = product.Id,
                    Title = product.Title,
                    Description = product.Description,
                    CreationDate = product.CreationDate.ToString("dd MMMM yyyy"),
                    Price = product.Price,

                };
                getProductProductItems.Add(getProductProductItem);
            }
            return getProductProductItems;
        }

        public async Task Update(UpdateProductModel model)
        {
            if (model.Id <= 0)
                return;

            var product = _repository.Products.SingleOrDefault(product => product.Id == model.Id);
            if (product == null)
                return;

            if (string.IsNullOrEmpty(model.Title))
                return;

            if (string.IsNullOrEmpty(model.Description))
                return;

            var templateForCurrency = new Regex(@"\d*((\.|,)\d+)|\d*");
            var isPriceMatched = templateForCurrency.IsMatch(model.Price);
            if (!isPriceMatched)
                return;

            product.Price = DecimalHelper.GetDecimal(model.Price, 0);
            product.Title = model.Title;
            product.Description = model.Description;

            _repository.Update(product);
            await _repository.SaveChangesAsync();

        }
    }
}
