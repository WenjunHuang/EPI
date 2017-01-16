using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using static EPI_CSharp.Problem_5_1;

namespace EPI_CSharp_Test
{
    public class Problem_5_1_Test
    {
        [Fact]
        public void Parity_Positive_Success()
        {
            // arrange
            var value = 0x753L;
            var expect = true;

            // act
            var result = Parity(value);

            // assert
            Assert.Equal(expect, result);
        }

        [Fact]
        public void Parity_NegativeValue_Success()
        {
            // arrange
            var value = -0x753L;
            var expect = false;


            // act
            var result = Parity(value);

            // assert
            Assert.Equal(expect, result);
        }

        [Fact]
        public void Parity_MinLongValue_Success()
        {
            // arrange
            var value = Int64.MinValue;
            var expect = true;

            //act
            var result = Parity(value);

            // assert
            Assert.Equal(expect, result);
        }
    }
}