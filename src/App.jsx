import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import TutorSearch from './pages/TutorSearch';
import LoginHCMUT from './pages/LoginViaSSO';
import WelcomePage from './pages/WelcomeToApp';
import ProtectedRoute from './components/ProtectedRoute';

// Bạn có thể tạo thêm file placeholder cho các trang chưa làm
const ComingSoon = () => <div className="text-center text-gray-500 mt-20">Tính năng đang phát triển...</div>;

function App() {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  // Khi load app, lấy token từ sessionStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken) setUserToken(savedToken);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          userToken ? <Navigate to="/" replace /> : <WelcomePage />
        } /> 
        <Route path="/mock-sso.hcmut/login" element={<LoginHCMUT setUser={setUser} setUserToken={setUserToken} />} />
        {/* Route cha sử dụng Layout */}
        <Route path="/" element={<ProtectedRoute userToken={userToken}><MainLayout user={user}/></ProtectedRoute>}>
          
          {/* Route con: Khi vào "/" thì hiện Dashboard */}
          <Route index element={<Dashboard />} />
          
          {/* Route con: Khi vào "/tutors" thì hiện trang Tìm kiếm */}
          <Route path="tutors" element={<TutorSearch />} />
          
          {/* Các route khác (Placeholder) */}
          <Route path="sessions" element={<ComingSoon />} />
          <Route path="library" element={<ComingSoon />} />
          <Route path="messages" element={<ComingSoon />} />
          
          {/* Nếu gõ linh tinh thì quay về trang chủ */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;