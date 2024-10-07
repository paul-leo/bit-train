import type { ReactNode } from 'react';
import { useState } from 'react';
import '@learnbit/styling.config.tailwind/globals.tailwind.css';

export type TrainSearchProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};


const CitySelector = ({ value, onChange, placeholder }) => (
  <select 
      className="w-full p-2 border-none text-xl bg-transparent"
      value={value}
      onChange={(e) => onChange(e.target.value)}
  >
      <option value="">{placeholder}</option>
      <option value="上海">上海</option>
      <option value="北京">北京</option>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
  </select>
);

const DatePicker = ({ value, onChange, placeholder }) => {
  const formatDate = (date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
  };

  const getDateLabel = (dateString) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const date = new Date(dateString);
      const diffDays = Math.round((Number(date) - Number(today)) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return '今天';
      if (diffDays === 1) return '明天';
      if (diffDays === 2) return '后天';
      
      const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      return weekdays[date.getDay()];
  };

  return (
      <div>
          <input 
              type="date" 
              className="w-full p-2 border-none text-gray-600 bg-transparent"
              value={value}
              onChange={(e) => onChange(formatDate(e.target.value))}
              placeholder={placeholder}
          />
          <div className="text-sm text-gray-500">{getDateLabel(value)}</div>
      </div>
  );
};

export const TrainSearch = ({onSearch}) => {
  const [activeTab, setActiveTab] = useState('单程');
  const [departureCity, setDepartureCity] = useState('上海');
  const [arrivalCity, setArrivalCity] = useState('北京');
  const [departureDate, setDepartureDate] = useState(() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
      const dayAfterTomorrow = new Date();
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
      return dayAfterTomorrow.toISOString().split('T')[0];
  });
  const [highSpeedOnly, setHighSpeedOnly] = useState(false);
  const [reservationType, setReservationType] = useState('本人');
  const swapCities = () => {
      const temp = departureCity;
      setDepartureCity(arrivalCity);
      setArrivalCity(temp);
  };

  return (
      <div data-testid="train-search" className="max-w-md mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white flex">
              <button 
                  className={`flex-1 text-lg font-medium py-3 transition-colors ${activeTab === '单程' ? 'bg-white text-blue-900' : ''}`}
                  onClick={() => setActiveTab('单程')}
              >
                  单程
              </button>
              <button 
                  className={`flex-1 text-lg font-medium py-3 transition-colors ${activeTab === '往返' ? 'bg-white text-blue-900' : ''}`}
                  onClick={() => setActiveTab('往返')}
              >
                  往返
              </button>
          </div>
          <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                  <CitySelector value={departureCity} onChange={setDepartureCity} placeholder="出发城市" />
                  <button onClick={swapCities} className="text-xl text-blue-400 mx-2">
                      <i className="fas fa-exchange-alt transform rotate-90"></i>
                  </button>
                  <CitySelector value={arrivalCity} onChange={setArrivalCity} placeholder="到达城市" />
              </div>
              <div className="flex justify-between items-center mb-4">
                  <div className="w-full">
                      <DatePicker value={departureDate} onChange={setDepartureDate} placeholder="出发日期" />
                  </div>
                  {activeTab === '往返' && (
                      <div className="w-full ml-4">
                          <DatePicker value={returnDate} onChange={setReturnDate} placeholder="返程日期" />
                      </div>
                  )}
              </div>
              <div className="flex items-center mb-4 text-gray-600">
                  <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 text-blue-600" 
                      id="highSpeedOnly"
                      checked={highSpeedOnly}
                      onChange={(e) => setHighSpeedOnly(e.target.checked)}
                  />
                  <label htmlFor="highSpeedOnly" className="ml-2">只看高铁动车</label>
              </div>
              <div className="flex justify-between items-center mb-6">
                  <label className="inline-flex items-center">
                      <input 
                          type="radio" 
                          className="form-radio h-5 w-5 text-blue-600" 
                          name="reservation" 
                          checked={reservationType === '本人'}
                          onChange={(e) => {
                            if(e.target.checked) {
                              setReservationType('本人');
                            }
                          }}
                      />
                      <span className="ml-2">为本人预订</span>
                  </label>
                  <label className="inline-flex items-center">
                      <input 
                          type="radio" 
                          className="form-radio h-5 w-5 text-gray-400" 
                          name="reservation"
                          checked={reservationType === '多人'}
                          onChange={(e) => {
                            console.log('e.target.checked', e.target.checked);
                            if(e.target.checked) {
                              setReservationType('多人');
                            }
                          }}
                      />
                      <span className="ml-2">为多人预订</span>
                  </label>
              </div>
              <button onClick={onSearch?.()} className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium">
                  查询
              </button>
          </div>
      </div>
  );
};

