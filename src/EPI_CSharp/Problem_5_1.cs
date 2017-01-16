using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPI_CSharp
{
    public static class Problem_5_1
    {
        /// <summary>
        /// parity of a integer
        /// </summary>
        /// <param name="value"></param>
        /// <returns>true if value is an odd integer, false otherwise</returns>
        public static bool Parity(long value)
        {
            var uValue = (ulong)value;
            var result = false;
            while (uValue != 0)
            {
                uValue &= uValue - 1;
                result = !result;
            }
            return result;
        }
    }
}
