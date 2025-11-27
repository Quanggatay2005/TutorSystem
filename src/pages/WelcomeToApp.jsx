import React from 'react';

export default function WelcomePage() {
  return (
    <div className="max-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans px-4">

      {/* Header app - full width, cao hơn */}
      <header className="w-full flex items-center gap-4 bg-[#1e3a8a] text-white px-8 py-6 rounded-lg shadow-lg mb-12">
        <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center font-bold text-lg">
          BK
        </div>
        <h1 className="text-3xl font-bold">HCMUT Tutor</h1>
      </header>

      {/* Card chào mừng - to hơn */}
      <div className="bg-white rounded-2xl shadow-xl p-12 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-6">Chào mừng đến với HCMUT Tutor</h2>
        <p className="text-gray-600 mb-8">Vui lòng đăng nhập để sử dụng các tính năng của app.</p>

        {/* Button login */}
        <a
          href="/mock-sso.hcmut/login"
          className="inline-block bg-[#1e3a8a] hover:bg-[#162e6f] text-white px-8 py-3 rounded-md font-medium text-lg transition"
        >
          Đăng nhập
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-xs text-blue-300 text-center">
        © HCMUT Tutor System – Software Artist
      </footer>
    </div>
  );
}
