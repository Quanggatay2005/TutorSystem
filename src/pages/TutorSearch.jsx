import React, { useState } from 'react';
import { mockData } from '../data/mockData'; // Nhớ import data
import { Search, Filter, Star, CheckCircle, Database } from 'lucide-react';
import { useFollow } from '../context/FollowContext';

// Small follow/unfollow button used in the results list
const FollowButton = ({ tutorId }) => {
  const { isFollowing, toggleFollow } = useFollow();
  const following = isFollowing(tutorId);

  return (
    <button
      onClick={() => toggleFollow(tutorId)}
      className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${following ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-[#06b6d4] text-white hover:opacity-90'}`}>
      {following ? 'Unfollow' : 'Follow'}
    </button>
  );
};

const TutorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('All');

  // Lấy danh sách Khoa duy nhất để làm menu lọc
  const faculties = ['All', ...new Set(mockData.tutors.map(t => t.faculty))];

  // Logic lọc dữ liệu (Core Feature)
  const filteredTutors = mockData.tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tutor.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFaculty = selectedFaculty === 'All' || tutor.faculty === selectedFaculty;
    
    return matchesSearch && matchesFaculty;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      {/* --- HEADER --- */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bk-blue mb-2">Tìm kiếm Tutor & Mentor</h1>
        <p className="text-gray-500 flex items-center gap-2">
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* --- LEFT SIDEBAR: FILTERS --- */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Filter size={18}/> Bộ lọc Khoa/Ngành
            </h3>
            <div className="space-y-2">
              {faculties.map(faculty => (
                <label key={faculty} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input 
                    type="radio" 
                    name="faculty" 
                    checked={selectedFaculty === faculty}
                    onChange={() => setSelectedFaculty(faculty)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-700">{faculty}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: RESULTS --- */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex gap-4">
            <Search className="text-gray-400 mt-2" />
            <div className="flex-1">
               <input 
                type="text"
                placeholder="Tìm theo tên Tutor hoặc môn học (VD: Giải tích, C++)..."
                className="w-full outline-none text-gray-700 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-bk-blue text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Tìm kiếm
            </button>
          </div>

          {/* List Tutors */}
          <div className="grid gap-4">
            {filteredTutors.map(tutor => (
              <div key={tutor.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                
                {/* Avatar Section */}
                <div className="flex-shrink-0 text-center">
                  <img src={tutor.avatar} alt={tutor.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-2 border-gray-100"/>
                  <div className="flex items-center justify-center gap-1 text-orange-500 font-bold">
                    <Star size={16} fill="currentColor"/> {tutor.rating}
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {tutor.name}
                        {tutor.isVerified && (
                           <span title="Xác thực bởi DataCore" className="text-green-500 cursor-help">
                             <CheckCircle size={18} fill="#dcfce7"/> 
                           </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium mb-2">
                        {tutor.faculty} • {tutor.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100">
                        Đăng ký ngay
                      </button>
                      <FollowButton tutorId={tutor.id} />
                    </div>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <p className="text-sm"><span className="font-bold text-gray-700">Môn dạy:</span> {tutor.subjects.join(", ")}</p>
                    <p className="text-sm"><span className="font-bold text-gray-700">Đối tượng:</span> {tutor.targetStudents}</p>
                    <p className="text-sm"><span className="font-bold text-gray-700">Lịch rảnh:</span> {tutor.availableTime.join("; ")}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorSearch;