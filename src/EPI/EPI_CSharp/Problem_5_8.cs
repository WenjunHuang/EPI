using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPI_CSharp
{
    public class Problem_5_8
    {
        public static long ReverseDigits(long value)
        {
            var negative = value < 0;
            long result = 0;
            value = Math.Abs(value);
            while (value != 0)
            {
                result = result * 10 + value % 10;
                value /= 10;
            }
            return negative ? -result : result;
        }
    }
}
