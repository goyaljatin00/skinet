using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrderbyPaymentIntentIdSpecification : BaseSpecification<Order>
    {
        public OrderbyPaymentIntentIdSpecification(string paymentIntentId) :
         base(o => o.PaymentIntentId == paymentIntentId)
        {
        }
    }
}