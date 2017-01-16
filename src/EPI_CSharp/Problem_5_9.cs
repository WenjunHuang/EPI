using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPI_CSharp
{
    public static class Problem_5_9
    {
        public static bool IsPalindrome(long value)
        {
            if (value < 0)
                return false;

            var numDigits = (long)Math.Floor(Math.Log10(value)) + 1;
            var numMask = (long)Math.Pow(10, numDigits - 1);

            for (var i = 0; i < numDigits / 2; ++i)
            {
                if (value / numMask != value % 10)
                    return false;
                value %= numMask;
                value /= 10;
                numMask /= 100;
            }
            return true;
        }
    }
}
