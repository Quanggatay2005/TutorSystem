import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react'; 
import { mockData } from '../data/mockData'; 

const parseMessageText = (text) => {
  if (!text) return text;
  return text.split('\n').map((line, idx) => (
    <div key={idx} className="min-h-[1.2em]">{line}</div>
  ));
};

const callAiEndpoint = async (userQuestion) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const lower = (userQuestion || '').toLowerCase();


    const tryLocalSearch = () => {
      try {
        // A. Logic thống kê (Gợi ý môn học)
        if (lower.includes('gợi ý') || lower.includes('môn')) {
          const allSubjects = (mockData.tutors || []).flatMap((t) => t.subjects || []);
          const freq = {};
          allSubjects.forEach((s) => { freq[s] = (freq[s] || 0) + 1; });
          const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).map(e => e[0]);
          return `Dữ liệu hiện có ${mockData.tutors.length} gia sư. Các môn phổ biến: ${sorted.slice(0,5).join(', ')}`;
        }

        // B. Logic tìm kiếm chính xác (Theo Tên, Khoa, Môn)
        const found = (mockData.tutors || []).filter(t => {
          const name = (t.name || '').toLowerCase();
          const faculty = (t.faculty || '').toLowerCase();
          const subjects = (t.subjects || []).map(s => s.toLowerCase());
          
          // Kiểm tra xem từ khóa có nằm trong data không
          return name.includes(lower) || faculty.includes(lower) || subjects.some(s => s.includes(lower));
        }).sort((a,b) => (b.rating||0) - (a.rating||0));

        // NẾU KHÔNG TÌM THẤY GÌ Ở LOCAL -> TRẢ VỀ NULL ĐỂ CHUYỂN CHO AI
        if (found.length === 0) return null;

        // Nếu tìm thấy -> Format kết quả trả về luôn
        const top = found.slice(0, 3);
        let out = `Tìm thấy ${found.length} gia sư phù hợp (từ dữ liệu có sẵn):\n\n`;
        top.forEach((t, i) => {
          out += `${i+1}. ${t.name} — ${t.rating}/5\n   Khoa: ${t.faculty}\n   Dạy: ${(t.subjects||[]).join(', ')}\n\n`;
        });
        if (found.length > 3) out += `... và ${found.length - 3} người khác.`;
        return out;

      } catch (e) {
        console.error(e);
        return null; 
      }
    };

    const localResult = tryLocalSearch();

    if (localResult) {
      return localResult;
    }
    // Nếu không có Key thì đành chịu thua
    if (!API_KEY) {
      return 'Không tìm thấy gia sư phù hợp trong danh sách và chưa kết nối AI để xử lý câu hỏi phức tạp.';
    }

    // Chuẩn bị dữ liệu gửi đi
    const contextData = JSON.stringify(mockData.tutors);
    const prompt = `
      Bạn là trợ lý tuyển sinh.
      DỮ LIỆU GIA SƯ: ${contextData}
      
      CÂU HỎI: "${userQuestion}"
      
      YÊU CẦU:
      - Bạn vừa được gọi vì hệ thống tìm kiếm từ khóa thông thường đã thất bại.
      - Hãy suy luận thông minh dựa trên dữ liệu (ví dụ: tìm môn liên quan, tìm theo mô tả "mất gốc", "ôn thi").
      - Chỉ dùng thông tin trong dữ liệu trên.
      - Trả lời ngắn gọn dưới 100 từ.
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        }
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return 'AI không tìm thấy câu trả lời phù hợp.';
      }

    } catch (error) {
      console.error('Lỗi gọi AI:', error);
      return 'Lỗi kết nối AI server.';
    }
};

const QuickChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Chào bạn! Mình là trợ lý ảo. Bạn cần tìm gia sư môn nào?' },
  ]);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (open && boxRef.current) {
      const el = boxRef.current.querySelector('input');
      if (el) el.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open && boxRef.current) {
        const chatBody = boxRef.current.querySelector('.chat-body');
        if(chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setLoading(true);
    

    const reply = await callAiEndpoint(text);
    
    setMessages((m) => [...m, { from: 'bot', text: reply }]);
    setLoading(false);
  };

  return (
    <div className="animate-fade-in"> {/* Thêm animation nhẹ nếu muốn */}
        <div className="fixed right-6 bottom-6 z-50 font-sans">
        <div className="flex flex-col items-end">
            {open && (
            <div 
                ref={boxRef} 
                className="w-80 md:w-96 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 mb-4 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
                {/* Header */}
                <div className="bg-[#38bdf8] p-4 flex items-center justify-between text-white shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-1 rounded-full">
                        <MessageCircle size={18} className="text-white"/>
                    </div>
                    <span className="font-bold text-sm">Trợ lý tìm kiếm</span>
                </div>
                <button onClick={() => setOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
                    <X size={18} />
                </button>
                </div>

                {/* Chat Body */}
                <div className="chat-body h-72 overflow-y-auto p-4 space-y-3 bg-[#f8fafc]">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                    <div 
                        className={`max-w-[85%] p-3 text-sm shadow-sm whitespace-pre-wrap break-words ${
                        m.from === 'bot' 
                            ? 'bg-white text-gray-700 border border-gray-200 rounded-2xl rounded-tl-none' 
                            : 'bg-[#38bdf8] text-white rounded-2xl rounded-tr-none'
                        }`}
                    >
                        {parseMessageText(m.text)}
                    </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white text-gray-400 text-xs py-2 px-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-1">
                            <span className="animate-pulse">●</span>
                            <span className="animate-pulse delay-75">●</span>
                            <span className="animate-pulse delay-150">●</span>
                        </div>
                    </div>
                )}
                </div>

                {/* Footer Input */}
                <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                    className="flex-1 bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#38bdf8]/50 transition border border-transparent focus:bg-white focus:border-gray-200"
                    placeholder="Ví dụ: Tìm gia sư Đại số tuyến tính"
                />
                <button 
                    onClick={send} 
                    disabled={loading || !input.trim()} 
                    className={`p-2 rounded-full text-white transition-all shadow-sm ${
                        input.trim() ? 'bg-[#38bdf8] hover:bg-sky-500 hover:shadow-md' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    <Send size={16} className={input.trim() ? "translate-x-0.5" : ""} />
                </button>
                </div>
            </div>
            )}

            {/* Floating Toggle Button */}
            {!open && (
                <button
                onClick={() => setOpen(true)}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#38bdf8] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-sky-500 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200"
                >
                <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300"/>
                </button>
            )}
        </div>
        </div>
    </div>
  );
};

export default QuickChat;