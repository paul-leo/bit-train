import { TrainTicket } from '../types.js';

class TrainService {
  // 模拟的火车票数据
  private tickets: TrainTicket[] = [
    { id: '1', departure: '北京', arrival: '上海', departureTime: '2023-06-01 08:00', price: 553, seats: 100 },
    { id: '2', departure: '北京', arrival: '广州', departureTime: '2023-06-01 09:30', price: 1100, seats: 80 },
    { id: '3', departure: '上海', arrival: '广州', departureTime: '2023-06-01 10:00', price: 863, seats: 90 },
    { id: '4', departure: '广州', arrival: '北京', departureTime: '2023-06-01 14:00', price: 1100, seats: 85 },
    { id: '5', departure: '上海', arrival: '北京', departureTime: '2023-06-02 08:00', price: 553, seats: 100 },
  ];

  async searchTickets(params: { date: string; departure: string; arrival: string }): Promise<TrainTicket[]> {
    const { date, departure, arrival } = params;
    console.log(`Searching tickets for ${date} from ${departure} to ${arrival}`);
    // 在实际应用中，这里应该是查询数据库或调用外部 API
    return this.tickets;
  }
}

export default TrainService;