import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import TutorSearch from './pages/TutorSearch';
import Message from './pages/Message';

// Bạn có thể tạo thêm file placeholder cho các trang chưa làm
const ComingSoon = () => <div className="text-center text-gray-500 mt-20">Tính năng đang phát triển...</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Route cha sử dụng Layout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Route con: Khi vào "/" thì hiện Dashboard */}
          <Route index element={<Dashboard />} />
          
          {/* Route con: Khi vào "/tutors" thì hiện trang Tìm kiếm */}
          <Route path="tutors" element={<TutorSearch />} />
          
          {/* Các route khác (Placeholder) */}
          <Route path="sessions" element={<ComingSoon />} />
          <Route path="library" element={<ComingSoon />} />
          <Route path="messages" element={<Message />} />
          
          {/* Nếu gõ linh tinh thì quay về trang chủ */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;