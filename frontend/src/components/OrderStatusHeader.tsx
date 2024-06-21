import { Order } from "@/types";
import { Progress } from "./ui/progress";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDeliveryTime = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {order.status}</span>
        <span>Expected by: {getExpectedDeliveryTime()}</span>
      </h1>
      <Progress className="animate-pulse" />
    </>
  );
};

export default OrderStatusHeader;
