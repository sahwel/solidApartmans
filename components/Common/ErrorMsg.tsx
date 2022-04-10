import React, { FunctionComponent, memo } from 'react'

interface ErrorMsgProps {
  message?: string
}
const ErrorMsg: FunctionComponent<ErrorMsgProps> = memo(
  function ErrorMsg({ message }) {
    return <span className="text-sm text-red-600">{message}</span>
  },
  (oldProps, newProps) => oldProps.message === newProps.message
)

export default ErrorMsg
