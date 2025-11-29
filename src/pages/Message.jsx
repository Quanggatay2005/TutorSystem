import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Send, Search, X, MessageSquare, ArrowLeft, UserPlus } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useFollow } from '../context/FollowContext';

const Message = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedTutorId, setSelectedTutorId] = useState(null);
  
  // Lưu trữ tin nhắn cục bộ (Demo)
  const [conversations, setConversations] = useState({});
  const [messageInput, setMessageInput] = useState('');
  
  const chatEndRef = useRef(null);
  const { isFollowing } = useFollow(); // Lấy hàm kiểm tra follow

  // 1. LỌC DANH SÁCH: Chỉ lấy những người ĐÃ FOLLOW + Khớp từ khóa tìm kiếm
  const displayedTutors = useMemo(() => {
    return (mockData.tutors || []).filter(t => {
      const isFollowed = isFollowing(t.id);
      const matchesSearch = (t.name || '').toLowerCase().includes(searchInput.toLowerCase()) ||
                            (t.subjects || []).some(s => s.toLowerCase().includes(searchInput.toLowerCase()));
      return isFollowed && matchesSearch;
    });
  }, [searchInput, isFollowing]); // Chạy lại khi search hoặc trạng thái follow thay đổi

  // Lấy data người đang chat
  const selectedTutor = mockData.tutors.find(t => t.id === selectedTutorId);
  const selectedConvo = selectedTutorId ? (conversations[selectedTutorId] || null) : null;

  // Auto scroll xuống cuối khi có tin nhắn mới
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedConvo, selectedTutorId]);

  // Gửi tin nhắn
  const sendMessage = () => {
    const text = messageInput.trim();
    if (!text || !selectedTutorId) return;

    // Thêm tin nhắn User
    setConversations(prev => {
      const convos = { ...prev };
      if (!convos[selectedTutorId]) convos[selectedTutorId] = { messages: [] };
      convos[selectedTutorId].messages.push({ from: 'user', text });
      return convos;
    });
    setMessageInput('');

    // Giả lập Bot trả lời
    setTimeout(() => {
      const replies = [
        'Chào bạn, mình có thể giúp gì?',
        'Mình nhận dạy kèm môn này, bạn rảnh buổi nào?',
        'Ok bạn, để mình xem lại lịch nhé.',
        'Cảm ơn bạn đã liên hệ!',
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setConversations(prev => {
        const convos = { ...prev };
        convos[selectedTutorId].messages.push({ from: 'bot', text: reply });
        return convos;
      });
    }, 1000);
  };

  return (
    // CONTAINER CHÍNH: Chiều cao tính toán để vừa khít màn hình (trừ đi header/padding)
    <div className="h-[calc(100vh-140px)] min-h-[500px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex animate-fade-in">
      
      {/* --- LEFT COL: LIST (Ẩn trên mobile nếu đang chat) --- */}
      <div className={`w-full md:w-1/3 lg:w-1/4 flex-col border-r border-gray-100 bg-white ${selectedTutorId ? 'hidden md:flex' : 'flex'}`}>
        
        {/* Header List */}
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <MessageSquare className="text-sky-500"/> Tin nhắn
          </h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm trong danh sách..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-sky-200 transition-all"
            />
          </div>
        </div>

        {/* List Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {displayedTutors.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 p-6 text-center">
              <UserPlus size={40} className="mb-3 opacity-20"/>
              <p className="text-sm font-medium">Chưa có cuộc trò chuyện.</p>
              <p className="text-xs mt-1">Hãy <b>Follow</b> gia sư để bắt đầu nhắn tin.</p>
            </div>
          ) : (
            displayedTutors.map(tutor => {
              const hasChat = conversations[tutor.id];
              const lastMsg = hasChat && hasChat.messages.length > 0 
                ? hasChat.messages[hasChat.messages.length - 1].text 
                : 'Bắt đầu trò chuyện ngay...';
              
              return (
                <div
                  key={tutor.id}
                  onClick={() => setSelectedTutorId(tutor.id)}
                  className={`p-3 mx-2 my-1 rounded-xl cursor-pointer transition-all flex items-center gap-3 ${
                    selectedTutorId === tutor.id 
                      ? 'bg-sky-50 text-sky-900 shadow-sm' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="relative">
                    <img src={tutor.avatar} alt="" className="w-12 h-12 rounded-full object-cover border border-gray-100"/>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="font-bold text-sm truncate">{tutor.name}</p>
                      <span className="text-[10px] text-gray-400">12:30</span>
                    </div>
                    <p className={`text-xs truncate ${selectedTutorId === tutor.id ? 'text-sky-600 font-medium' : 'text-gray-500'}`}>
                      {lastMsg}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* --- RIGHT COL: CHAT WINDOW (Ẩn trên mobile nếu chưa chọn ai) --- */}
      <div className={`flex-1 flex-col bg-gray-50/50 ${!selectedTutorId ? 'hidden md:flex' : 'flex'}`}>
        {selectedTutor ? (
          <>
            {/* Chat Header */}
            <div className="p-3 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm z-10">
              <div className="flex items-center gap-3">
                {/* Nút Back cho Mobile */}
                <button onClick={() => setSelectedTutorId(null)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                  <ArrowLeft size={20} className="text-gray-600"/>
                </button>
                
                <img src={selectedTutor.avatar} className="w-10 h-10 rounded-full object-cover border border-gray-200" alt=""/>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{selectedTutor.name}</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-red-500 transition">
                  <X size={20} onClick={() => setSelectedTutorId(null)}/>
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#f8fafc]">
               {/* Welcome Banner */}
               <div className="text-center py-6">
                 <img src={selectedTutor.avatar} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-sm" alt=""/>
                 <p className="text-gray-500 text-xs">Bạn đang trò chuyện với <b>{selectedTutor.name}</b></p>
                 <p className="text-gray-400 text-[10px]">Chuyên môn: {selectedTutor.subjects.join(', ')}</p>
               </div>

              {(!selectedConvo || selectedConvo.messages.length === 0) ? (
                 <div className="text-center text-xs text-gray-400 italic mt-10">
                   Chưa có tin nhắn nào. Hãy nói "Xin chào"!
                 </div>
              ) : (
                selectedConvo.messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                    <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-[#38bdf8] text-white rounded-tr-none'
                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1.5 border border-transparent focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-gray-700 placeholder-gray-400"
                />
                <button
                  onClick={sendMessage}
                  disabled={!messageInput.trim()}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    messageInput.trim()
                      ? 'bg-[#38bdf8] text-white hover:bg-sky-500 shadow-md transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={18} className={messageInput.trim() ? "translate-x-0.5" : ""} />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State Right Side */
          <div className="hidden md:flex flex-col items-center justify-center h-full text-gray-300">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
               <MessageSquare size={40} />
            </div>
            <p className="text-gray-400 font-medium">Chọn một người để bắt đầu</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;