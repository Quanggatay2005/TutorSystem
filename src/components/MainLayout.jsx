import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import QuickChat from './QuickChat';
import { 
  LayoutDashboard, Users, Calendar, BookOpen, 
  MessageSquare, Bell, Settings 
} from 'lucide-react';

const MainLayout = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại để tô màu menu

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Tìm Tutor", path: "/tutors" }, // Link tới trang tìm kiếm
    { icon: Calendar, label: "Lịch hẹn", path: "/sessions" },
    { icon: BookOpen, label: "Thư viện", path: "/library" },
    { icon: MessageSquare, label: "Tin nhắn", path: "/Messages" },
    { icon: Bell, label: "Thông báo", path: "/notifications", badge: 3 },
    { icon: Settings, label: "Cài đặt", path: "/settings" },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      {/* --- SIDEBAR --- */}
      <div className="w-64 bg-[#1e3a8a] text-white flex flex-col h-screen fixed left-0 top-0 z-50">
        <div className="p-6 flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">BK</div>
          HCMUT Tutor
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
                  ${isActive ? 'bg-[#06b6d4] text-white font-semibold shadow-lg' : 'text-blue-100 hover:bg-blue-800'}
                `}
              >
                <item.icon size={20} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 text-xs text-blue-300 text-center border-t border-blue-800">
          © HCMUT Tutor System<br/>Software Artist
        </div>
      </div>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="ml-64 flex-1 p-8">
        {/* Header dùng chung */}
        <div className="flex justify-end mb-6">
           <div className="flex items-center gap-3 bg-[#1e3a8a] py-2 px-4 rounded-full shadow-lg">
              <img src="https://i.pravatar.cc/150?u=user" className="w-8 h-8 rounded-full border border-white"/>
              <span className="text-white font-medium text-sm">Hello, Student</span>
           </div>
        </div>

        {/* Nơi nội dung của từng trang sẽ hiện ra */}
        <Outlet />
        {/* Quick AI chat widget (floating) */}
        <QuickChat />
      </div>
    </div>
  );
};

export default MainLayout;