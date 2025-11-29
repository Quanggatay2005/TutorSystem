import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Calendar, AlertTriangle, CheckCircle2, UserCheck, Trash2, MessageSquare } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useFollow } from '../context/FollowContext';

// --- HELPER: Phân tích lịch học ---
const PERIODS = ['Sáng', 'Chiều', 'Tối'];
const DAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const parseTutorScheduleToSlots = (tutor) => {
  const slots = [];
  tutor.availableTime.forEach(timeStr => {
    const periodMatch = timeStr.match(/(Sáng|Chiều|Tối)/);
    const period = periodMatch ? periodMatch[0] : 'Sáng';
    const daysMatch = timeStr.match(/Thứ\s*([2-7])|CN/g);
    if (daysMatch) {
      daysMatch.forEach(d => {
        let dayShort = d.includes('CN') ? 'CN' : 'T' + d.replace('Thứ', '').trim();
        slots.push({
          day: dayShort,
          period: period,
          tutorId: tutor.id,
          tutorName: tutor.name,
          subject: tutor.subjects[0],
          avatar: tutor.avatar
        });
      });
    }
  });
  return slots;
};

// --- COMPONENT: THỜI KHÓA BIỂU ---
const WeeklyTimetable = ({ followingTutors }) => {
  const { scheduleGrid, conflicts } = useMemo(() => {
    const grid = {};
    let conflictList = [];
    DAYS.forEach(day => {
      grid[day] = {};
      PERIODS.forEach(per => grid[day][per] = []);
    });

    followingTutors.forEach(tutor => {
      const slots = parseTutorScheduleToSlots(tutor);
      slots.forEach(slot => {
        if (grid[slot.day] && grid[slot.day][slot.period]) {
          grid[slot.day][slot.period].push(slot);
        }
      });
    });

    DAYS.forEach(day => {
      PERIODS.forEach(per => {
        if (grid[day][per].length > 1) conflictList.push({ day, period: per, count: grid[day][per].length });
      });
    });

    return { scheduleGrid: grid, conflicts: conflictList };
  }, [followingTutors]);

  if (followingTutors.length === 0) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar className="text-sky-500" /> Thời khóa biểu dự kiến
        </h2>
        {conflicts.length > 0 ? (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold animate-pulse">
            <AlertTriangle size={16} /> Trùng {conflicts.length} lịch!
          </div>
        ) : (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg text-xs font-bold">
            <CheckCircle2 size={16} /> Lịch ổn.
          </div>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-3 text-left text-xs font-bold text-gray-400 uppercase w-16">Giờ</th>
              {DAYS.map(day => <th key={day} className="p-3 text-center text-sm font-bold text-gray-700 w-[13%]">{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map(period => (
              <tr key={period} className="border-b border-gray-100 last:border-0">
                <td className="p-3 font-bold text-gray-500 text-xs bg-gray-50/50">{period}</td>
                {DAYS.map(day => {
                  const sessions = scheduleGrid[day][period];
                  const isConflict = sessions.length > 1;
                  return (
                    <td key={`${day}-${period}`} className={`p-1 border-l border-gray-100 align-top h-28 relative ${isConflict ? 'bg-red-50/50' : ''}`}>
                      <div className="flex flex-col gap-1 h-full overflow-y-auto max-h-[110px] custom-scrollbar">
                        {sessions.map((ses, idx) => (
                          <div key={idx} className={`p-1.5 rounded-md text-[10px] border shadow-sm flex gap-1.5 items-center ${isConflict ? 'bg-white border-red-200 text-red-700' : 'bg-sky-50 border-sky-100 text-sky-800'}`}>
                            <img src={ses.avatar} className="w-4 h-4 rounded-full" alt="" />
                            <div className="font-bold line-clamp-1 flex-1">{ses.subject}</div>
                          </div>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- MAIN DASHBOARD ---
const Dashboard = () => {
  const { tutors } = mockData;
  const { toggleFollow, isFollowing } = useFollow();
  const navigate = useNavigate(); // 2. Khởi tạo hook navigate
  
  const followingTutors = tutors.filter(t => isFollowing(t.id));
  const recommendedTutors = tutors.filter(t => !isFollowing(t.id)).slice(0, 3);
  const recentMessages = []; 

  // 3. Hàm xử lý khi bấm nút Message
  const handleMessageClick = (tutorId) => {
    // Nếu chưa follow thì tự động follow trước (để hiện trong danh sách tin nhắn)
    if (!isFollowing(tutorId)) {
      toggleFollow(tutorId);
    }
    // Chuyển hướng sang trang Message (Giả sử đường dẫn route là '/messages')
    navigate('/messages'); 
  };

  return (
    <div className="animate-fade-in pb-10">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

      <div className="grid grid-cols-12 gap-8">
        
        {/* LEFT: Recommended */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Recommended</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedTutors.length > 0 ? recommendedTutors.map((tutor) => (
              <div key={tutor.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-all">
                <img src={tutor.avatar} alt={tutor.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                <h3 className="font-bold text-base text-gray-900 text-center line-clamp-1">{tutor.name}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">{tutor.faculty}</p>
                <div className="flex gap-1 mb-3">
                   {tutor.subjects.slice(0,1).map(s => <span key={s} className="text-[10px] bg-gray-100 px-2 py-1 rounded">{s}</span>)}
                </div>
                
                {/* --- KHU VỰC BUTTONS --- */}
                <div className="space-y-2 w-full mt-auto">
                  <button
                    onClick={() => toggleFollow(tutor.id)}
                    className="w-full text-sm font-bold py-2 rounded-lg bg-[#38bdf8] text-white hover:bg-sky-500 transition-colors">
                    Follow
                  </button>
                  
                  {/* 4. Gắn hàm xử lý vào nút Message */}
                  <button 
                    onClick={() => handleMessageClick(tutor.id)} 
                    className="w-full text-gray-500 text-sm font-medium flex items-center justify-center gap-1 hover:text-gray-900 transition-colors"
                  >
                    <MessageSquare size={14}/> Message
                  </button>
                </div>

              </div>
            )) : (
              <div className="col-span-3 text-center py-10 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
                Bạn đã follow hết danh sách gợi ý!
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Your Tutors */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Recent Messages */}
          {recentMessages.length > 0 && (
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <MessageSquare size={18} className="text-[#38bdf8]"/>
                Recent Chats
              </h3>
              <div className="space-y-2">
                {recentMessages.map(msg => (
                  <div key={msg.tutorId} className="p-2 bg-gray-50 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start gap-2">
                      <img src={msg.tutorAvatar} alt={msg.tutorName} className="w-8 h-8 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs text-gray-800">{msg.tutorName}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">{msg.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Tutors</h2>
              <div className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {followingTutors.length} Following
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
               {followingTutors.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                   <UserCheck size={32} className="mb-2 opacity-50"/>
                   <p className="text-sm">Chưa follow ai</p>
                 </div>
               ) : (
                 <div className="max-h-[350px] overflow-y-auto custom-scrollbar p-2 space-y-3">
                   {followingTutors.map(t => (
                     <div key={t.id} className="flex items-start gap-3 p-3 bg-gray-50/50 hover:bg-sky-50 rounded-xl transition-colors group border border-transparent hover:border-sky-100">
                        <img src={t.avatar} className="w-10 h-10 rounded-full object-cover border border-white shadow-sm" alt="" />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-sm text-gray-800 truncate">{t.name}</div>
                          <div className="text-xs text-gray-500 truncate">{t.subjects[0]}</div>
                          <div className="text-[10px] text-sky-600 mt-1 font-medium bg-sky-100/50 inline-block px-1.5 py-0.5 rounded">
                            {t.availableTime[0]}
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleFollow(t.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Unfollow"
                        >
                          <Trash2 size={14}/>
                        </button>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>

      <WeeklyTimetable followingTutors={followingTutors} />
    </div>
  );
};

export default Dashboard;