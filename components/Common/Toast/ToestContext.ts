import { createContext } from 'react'

export interface ToastContextModel {
  public: ToastContextPublic
}

export interface ToastContextPublic {
  info(message: string): void
  success(message: string): void
  warn(message: string): void
  error(message: string): void
  hide(): void
}

export const ToastContext = createContext<ToastContextModel>(null as any)
