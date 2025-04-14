import { create } from 'zustand';

interface AuthState {
  Token: string | null;
  expiresIn: number | null;
  setAuth: (token: string, expires: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  Token: null,
  expiresIn: null,
  setAuth: (token, expires) => set({ Token: token, expiresIn: expires }),
  logout: () => set({ Token: null, expiresIn: null }),
}));
