using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value="Pending")]
        Pending,

        [EnumMember(Value="Payment Received")]
        Received,

        [EnumMember(Value="Payment Failed")]
        Failed   
    }
}