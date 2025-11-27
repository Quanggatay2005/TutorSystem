import React from 'react';
import { MessageSquare } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useFollow } from '../context/FollowContext';

const Dashboard = () => {
  // Lấy dữ liệu từ mockData thay vì hard-code
  const { tutors } = mockData; 
  // Lấy 3 tutor đầu làm ví dụ recommended
  const recommendedTutors = tutors.slice(0, 3);
  const { toggleFollow, isFollowing } = useFollow();

  return (
    <div className="animate-fade-in"> {/* Thêm animation nhẹ nếu muốn */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Tutors by AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedTutors.map((tutor) => (
              <div key={tutor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <img src={tutor.avatar} alt={tutor.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                
                <h3 className="font-bold text-lg text-gray-900">{tutor.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{tutor.faculty}</p>
                
                <div className="flex gap-2 mb-3 flex-wrap justify-center">
                  {tutor.subjects.slice(0, 2).map(sub => (
                    <span key={sub} className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">{sub}</span>
                  ))}
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <span className="text-black font-bold">★ {tutor.rating}</span>
                  <span className="text-xs text-gray-400">({Math.round(tutor.rating * 10)} reviews)</span>
                </div>

                <div className="space-y-2 w-full mt-auto">
                  <button
                    onClick={() => toggleFollow(tutor.id)}
                    className={`w-full font-bold py-2 rounded-lg transition-colors ${isFollowing(tutor.id) ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-[#38bdf8] text-white hover:bg-sky-500'}`}>
                    {isFollowing(tutor.id) ? 'Unfollow' : 'Follow'}
                  </button>
                  <button className="w-full text-gray-600 text-sm font-medium flex items-center justify-center gap-1">
                    <MessageSquare size={14}/> Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Upcoming) */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Sessions</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
            {/* Mock data cho phần này */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {i+8}h
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-800">Giải tích 1</p>
                    <p className="text-xs text-gray-500">Phòng 405 - H6</p>
                  </div>
                </div>
                <button className="text-sky-600 text-sm font-bold hover:underline">
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;