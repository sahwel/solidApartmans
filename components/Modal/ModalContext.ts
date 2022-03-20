/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext } from 'react'

export interface ModalContextModel {
  public: ModalContextPublic
}

export interface ModalState {
  modal: JSX.Element | null
  header?: JSX.Element | null
  closeButtonClassNames?: string
}

export const defaultModalState: ModalState = {
  modal: null,
  header: null,
  closeButtonClassNames: '',
}

export interface ModalContextPublic {
  show(
    modal: JSX.Element,
    header?: JSX.Element,
    closeButtonClassNames?: string
  ): void
  hide(): void
}

export const ModalContext = createContext<ModalContextModel>(null as any)
