using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace asp_net_Web_api.Helpers
{
    public static class DecimalHelper
    {
        public static decimal GetDecimal(string value, decimal defaultValue)
        {
            decimal result;

            var isParsedDecimal = decimal.TryParse(value, NumberStyles.Any, CultureInfo.CurrentCulture, out result);
            if (isParsedDecimal)
                return result;

            isParsedDecimal = decimal.TryParse(value, NumberStyles.Any, CultureInfo.GetCultureInfo("en-US"), out result);
            if (isParsedDecimal)
                return result;

            isParsedDecimal = decimal.TryParse(value, NumberStyles.Any, CultureInfo.InvariantCulture, out result);
            if (isParsedDecimal)
                return result;            
           
            return defaultValue;
           

        }
    }
}
