import React from 'react';

const StatisticsCard = ({ title, value, change, icon:Icon,bg, text }) => {
  return (
    <div className="statistics-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <div className='w-full'>
          <div className='flex justify-between items-center'>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <Icon className={`text-4xl ${bg} ${text} rounded-full p-2 w-14 h-14`}/>
          </div>
          
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <span className={`text-sm mt-1 ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
            {change}
          </span>
        </div>
        {/* <i className={`${icon} text-3xl text-gray-400`}></i> */}
      </div>
    </div>
  );
};

export default StatisticsCard;
