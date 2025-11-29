import { Navigate } from 'react-router-dom';
import React from 'react';

// user: trạng thái đăng nhập (null nếu chưa login, object nếu đã login)
// children: component muốn render nếu đã login
export default function ProtectedRoute({ userToken, children }) {
  if (!userToken) {
    // Chưa login → redirect về WelcomePage ("/login")
    return <Navigate to="/login" replace />;
  }
  // Đã login → render component bình thường
  return children;
}
