import type { ReactNode } from 'react';
import { useState } from 'react';
export type TrainListProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

const Header = () => (
  <header className="flex justify-between items-center mb-4 bg-white p-4 sticky top-0 z-10">
      <div className="flex items-center">
          <i className="fas fa-chevron-left text-gray-600 mr-4"></i>
          <h1 className="text-lg font-bold">去程：上海-北京</h1>
      </div>
      <div className="flex items-center">
          <span className="text-blue-600 mr-4">客服</span>
          <i className="fas fa-edit text-blue-600"></i>
      </div>
  </header>
);

const DateSelector = ({ selectedDate, onDateChange }) => (
  <div className="flex justify-between mb-4">
      <div className="flex space-x-2">
          {['09-27', '09-28', '09-29'].map((date, index) => (
              <button 
                  key={date} 
                  className={`px-3 py-1 rounded-full ${selectedDate === date ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}
                  onClick={() => onDateChange(date)}
              >
                  {date}<br/>{['周五', '周六', '周日'][index]}
              </button>
          ))}
      </div>
      <button className="text-blue-600"><i className="far fa-calendar-alt"></i></button>
  </div>
);

const TrainInfo = ({ train }) => (
  <div className="bg-white rounded-lg p-4 mb-4 shadow">
      <div className="flex justify-between items-center mb-2">
          <span className="font-bold">{train.train}</span>
          <span className={`text-sm ${train.carbon.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>{train.carbon}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-bold">{train.departure}</div>
          <div className="text-gray-500 text-sm">{train.duration}</div>
          <div className="text-2xl font-bold">{train.arrival}</div>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mb-2">
          <div>{train.from}</div>
          <div>{train.to}</div>
      </div>
      <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">{train.trainNo}</span>
          <span className="text-blue-600 font-bold text-xl">¥{train.price}</span>
      </div>
      <div className="flex justify-between text-sm">
          {train.seats.map((seat, index) => (
              <span key={index} className={`${seat.includes('抢') ? 'text-orange-500' : seat.includes('张') ? 'text-blue-600' : 'text-gray-400'}`}>{seat}</span>
          ))}
      </div>
  </div>
);

export const TrainList = () => {
  const [selectedDate, setSelectedDate] = useState('09-28');
  const trains = [
      { id: 1, train: "复兴号", carbon: "-12%碳排放量", departure: "06:27", arrival: "13:12", duration: "6时45分", from: "上海虹桥", to: "北京南", trainNo: "G104", price: "597.0", seats: ["二等座 候补", "一等座 候补", "商务座 候补"] },
      { id: 2, train: "复兴号", carbon: "-10%碳排放量", departure: "06:37", arrival: "12:38", duration: "6时1分", from: "上海虹桥", to: "北京南", trainNo: "G102", price: "576.0", seats: ["二等座 候补", "一等座 候补", "商务座 候补"] },
      { id: 3, train: "复兴号", carbon: "-21%碳排放量", departure: "07:00", arrival: "11:36", duration: "4时36分", from: "上海", to: "北京南", trainNo: "G2", price: "1467", seats: ["二等座 抢", "一等座 候补", "商务座 候补", "优选一等座 1张"] },
      { id: 4, train: "复兴号", carbon: "-19%碳排放量", departure: "07:22", arrival: "13:22", duration: "6时0分", from: "上海虹桥", to: "北京南", trainNo: "G106", price: "969", seats: ["二等座 候补", "一等座 2张", "商务座 4张"] },
      { id: 5, train: "复兴号", carbon: "+31%碳排放量", departure: "07:27", arrival: "13:36", duration: "6时9分", from: "上海虹桥", to: "北京南", trainNo: "G108", price: "969", seats: ["二等座 候补", "一等座 7张", "商务座 6张"] },
      { id: 6, train: "复兴号", carbon: "+32%碳排放量", departure: "07:38", arrival: "13:32", duration: "5时54分", from: "上海虹桥", to: "北京南", trainNo: "G110", price: "1998", seats: ["二等座 候补", "一等座 候补", "商务座 2张"] },
  ];

  return (
      <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
          <Header />
          <div className="p-4">
              <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
              {trains.map(train => (
                  <TrainInfo key={train.id} train={train} />
              ))}
          </div>
      </div>
  );
};
