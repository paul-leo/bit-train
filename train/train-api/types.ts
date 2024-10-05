export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface Order {
  orderId: number;
  productId: number;
  quantity: number;
}

export interface AuthResponse {
  token: string;
}

export interface Service {
  
}
// ... 保留之前的类型定义 ...

export interface TrainTicket {
  id: string;
  departure: string;
  arrival: string;
  departureTime: string;
  price: number;
  seats: number;
}

// ... 其他类型定义 ...
