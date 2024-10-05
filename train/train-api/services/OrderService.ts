import { Order ,Service} from '../types.js';

class OrderService implements Service {
  async create({ productId, quantity }: { productId: number; quantity: number }): Promise<Order> {
    return {
      orderId: Math.floor(Math.random() * 1000),
      productId,
      quantity
    };
  }
}

export default OrderService;