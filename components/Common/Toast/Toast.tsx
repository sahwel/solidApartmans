import { FunctionComponent, useContext, useMemo } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { ToastContext, ToastContextModel } from './ToestContext'
import 'react-toastify/dist/ReactToastify.css'

const Toast: FunctionComponent = ({ children }) => {
  const contextValue: ToastContextModel = useMemo(
    () => ({
      public: {
        info(message: string) {
          toast.info(message)
        },
        error(message: string) {
          toast.error(message)
        },
        success(message: string) {
          toast.success(message)
        },
        warn(message: string) {
          toast.warn(message)
        },
        hide() {
          toast.dismiss()
        },
      },
    }),
    []
  )
  return (
    <ToastContext.Provider value={contextValue}>
      <ToastContainer closeButton={true} />
      {children}
    </ToastContext.Provider>
  )
}

export default Toast

export function useToast() {
  const value = useContext(ToastContext)

  return value.public
}
