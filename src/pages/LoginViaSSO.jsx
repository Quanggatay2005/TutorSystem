import React from 'react';
import { useState } from 'react';
import { LoginSSOService } from '../services/SSOService';
import { useNavigate } from 'react-router-dom';

export default function LoginHCMUT({ setUser,setUserToken}) {
  //Hàm thu thập dữ liệu đăng nhập SSO giả lập cho HCMUT
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function handleLogin() {
    try {
      const result = await LoginSSOService({ username, password });
      
      // Lưu token & user
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      
      setUser(result.user);
      setUserToken(result.token);
      // Chuyển về trang chủ
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <div className="w-full max-w-6xl bg-white border border-gray-300 shadow-sm">
        
        {/* Header */}
        <div className="bg-[#003366] text-white py-4 px-6">
          <h1 className="text-2xl font-bold text-center">Central Authentication Service</h1>
        </div>

        {/* Main Content - Flex row for login and info */}
        <div className="flex flex-col lg:flex-row p-8">
          {/* Left Column - Login Form */}
          <div className="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Enter your Username and Password
            </h2>
            {error && (
              <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
            )}
            {/* Login Form */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded-sm focus:outline-none
                    ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className={`w-full px-3 py-2 border rounded-sm focus:outline-none
                    ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-gray-700 text-sm">
                  Via me before logging me into other sites.
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#003366] hover:bg-[#002244] text-white py-2 px-4 rounded-sm font-medium border border-gray-400" onClick={handleLogin}>
                  Login
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-sm font-medium border border-gray-400" onClick={() => { setUsername(''); setPassword(''); setError(''); }}>
                  Clear
                </button>
              </div>

              <div className="text-center mt-2">
                <button className="text-blue-700 hover:underline text-sm">
                  Change password?
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            {/* Please note section */}
            {/* Languages */}
              <div className="text-left">
                <span className="text-gray-700 font-medium">Languages</span>
                <div className="mt-2">
                  <button className="mx-2 text-blue-700 hover:underline font-medium">Vietnamese</button>
                  <span className="text-gray-400">|</span>
                  <button className="mx-2 text-blue-700 hover:underline font-medium">English</button>
                </div>
              </div>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Please note</h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  The Login page enables single sign-on to multiple websites at HCMUT. This means that you only have to enter your user name and password once for websites that subscribe to the Login page.
                </p>
                <p>
                  You will need to use your HCMUT Username and password to login to this site. The "HCMUT" account provides access to many resources including the HCMUT Information System, e-mail, ...
                </p>
                <p>
                  For security reasons, please Exit your web browser when you are done accessing services that require authentication!
                </p>
              </div>
            </div>

            {/* Technical support */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Technical support</h3>
              <p className="text-sm text-gray-700">
                E-mail: suport@hcmut.edu.vn | Tel: (84-8) 38647266 - 7204
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 py-4 px-6">
          <div className="text-center text-gray-600 text-xs">
            <p className="mb-1">
              Copyright © 2011 - 2012 Ho Chi Minh University of Technology. All rights reserved.
            </p>
            <p>
              Powered by <span className="font-semibold">Jasip CAS 3.5.1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}