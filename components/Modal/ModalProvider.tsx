/* eslint-disable no-undef */
import { FunctionComponent, memo, useContext, useMemo, useState } from 'react'
import {
  defaultModalState,
  ModalContext,
  ModalContextModel,
  ModalState,
} from './ModalContext'
import { XCircleIcon } from '@heroicons/react/outline'

const Modal: FunctionComponent = memo(function Modal({ children }) {
  const [currentModal, setCurrentModal] =
    useState<ModalState>(defaultModalState)
  const contextValue: ModalContextModel = useMemo(
    () => ({
      public: {
        show(
          modal: JSX.Element,
          header: JSX.Element,
          closeButtonClassNames: string
        ) {
          setCurrentModal({
            modal: modal,
            header: header,
            closeButtonClassNames: closeButtonClassNames,
          })
        },
        hide() {
          setCurrentModal(defaultModalState)
        },
      },
    }),
    []
  )
  return (
    <ModalContext.Provider value={contextValue}>
      {currentModal.modal && (
        <div
          className="fixed z-50 flex h-screen w-screen items-center justify-center bg-gray-900/[0.8] text-main-text"
          onClick={contextValue.public.hide}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-modal  relative min-h-[200px] min-w-[400px] rounded-2xl bg-white p-4 shadow-2xl"
          >
            <div
              className={`flex ${
                currentModal.header ? 'justify-between' : 'justify-end'
              }`}
            >
              {currentModal.header}
              <XCircleIcon
                className="h-7 w-7 cursor-pointer"
                onClick={contextValue.public.hide}
              />
            </div>
            {currentModal.modal}
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  )
})

export default Modal

export function useModal() {
  const value = useContext(ModalContext)
  return value.public
}
