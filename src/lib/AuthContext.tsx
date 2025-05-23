import React, { createContext, useContext, useState, useEffect } from 'react';
import directus from './directus';
import { readMe, login as directusLogin, logout as directusLogout } from '@directus/sdk';
import type { User } from './directus';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const user = await directus.request(readMe());
      if (typeof user === 'object' && user !== null) {
        setUser({
          id: String(user.id || ''),
          first_name: String(user.first_name || ''),
          last_name: String(user.last_name || ''),
          email: String(user.email || ''),
          description: String(user.description || ''),
          avatar: typeof user.avatar === 'object' ? String(user.avatar.id || '') : null
        });
      }
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function loginHandler(email: string, password: string) {
    try {
      await directus.login(email, password);
      await checkAuth();
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async function logoutHandler() {
    try {
      await directus.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }

  const value = {
    user,
    isLoading,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
