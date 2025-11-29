import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function AvatarDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* --- Avatar header --- */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-[#1e3a8a] py-2 px-4 rounded-full cursor-pointer select-none shadow-md hover:bg-[#065f73] transition-all duration-200 hover:shadow-lg"
      >
        <img 
          src={user.avatar} 
          alt={user.fullName} 
          className="w-8 h-8 rounded-full border-2 border-white flex-shrink-0 object-cover" 
        />
        <span className="text-white font-medium text-sm">
          Hello, {user?.fullName?.trim().split(/\s+/).slice(-1)[0]}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-white transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {/* --- Dropdown menu --- */}
      <div className={`
        absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 
        transition-all duration-200 transform origin-top-right z-50
        ${open 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }
      `}>

        {/* Menu items - cùng kích thước */}
        <div className="p-2">
          <Link
            to="/profile"
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 group"
            onClick={() => setOpen(false)}
          >
            <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <User size={18} className="text-blue-600" />
            </div>
            <span className="font-medium text-sm">Profile</span>
          </Link>
        {/*Phát triển sau*/}
          <Link
            to="/settings"
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 group"
            onClick={() => setOpen(false)}
          >
            <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <Settings size={18} className="text-blue-600" />
            </div>
            <span className="font-medium text-sm">Settings</span>
          </Link>

          <button
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-150 group mt-1"
          >
            <div className="p-1.5 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
              <LogOut size={18} className="text-red-600" />
            </div>
            <span className="font-medium text-sm">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
