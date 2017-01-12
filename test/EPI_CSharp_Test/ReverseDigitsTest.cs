using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPI_CSharp;
using Xunit;

namespace EPI_CSharp_Test
{
    public class ReverseDigitsTest
    {
        [Fact]
        public void ReverseDigits_Success()
        {
            // arrange
            long positive = 2323424;
            long positiveResult = 4243232;
            long negative = -34513;
            long negativeResult = -31543;

            // act
            long result = Problem_5_8.ReverseDigits(positive);
            Assert.Equal(positiveResult, result);

            result = Problem_5_8.ReverseDigits(negative);
            Assert.Equal(negativeResult, result);
        }
    }
}