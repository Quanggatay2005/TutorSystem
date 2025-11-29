/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { mockData } from '../data/mockData';

const FollowContext = createContext(null);

export const FollowProvider = ({ children }) => {
  const storageKey = 'hcmut_following';

  const [following, setFollowing] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch {
      // ignore
    }

    // fallback to mock user data (if any)
    try {
      return (mockData.user && mockData.user[0] && mockData.user[0].following) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(following));
    } catch {
      // ignore
    }
  }, [following]);

  const follow = (id) => setFollowing((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const unfollow = (id) => setFollowing((prev) => prev.filter((x) => x !== id));
  const toggleFollow = (id) => setFollowing((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const isFollowing = (id) => following.includes(id);

  return (
    <FollowContext.Provider value={{ following, follow, unfollow, toggleFollow, isFollowing }}>
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => {
  const ctx = useContext(FollowContext);
  if (!ctx) throw new Error('useFollow must be used within a FollowProvider');
  return ctx;
};

export default FollowContext;
