using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using static EPI_CSharp.Problem_5_9;

namespace EPI_CSharp_Test
{
    public class Problem_5_9_Test
    {
        [Fact]
        public void IsPolindrome_Success()
        {
            // arrange
            var value1 = 63822836;
            var value2 = 5;
            var value3 = 2126;

            // act
            Assert.True(IsPalindrome(value1));
            Assert.True(IsPalindrome(value2));
            Assert.False(IsPalindrome(value3));

        }
    }
}
