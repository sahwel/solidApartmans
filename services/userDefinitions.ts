export interface LoginModel {
  email: string
  password: string
}

export const validateExpire = (date: string) => {
  return new Date(date) < new Date()
}
