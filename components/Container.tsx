import { FunctionComponent, memo } from 'react'
import cl from 'classnames'

interface ContainerProps {
  className?: string
}

const Container: FunctionComponent<ContainerProps> = memo(
  function Container({ children, className }) {
    return (
      <div
        className={cl(
          'mx-auto min-h-screen w-full space-y-5 bg-gray-200 md:mb-12 md:!mt-10 md:min-h-0 md:w-[75%] md:rounded-2xl md:drop-shadow-2xl lg:!w-[90%] lg:space-y-0 lg:bg-white lg:p-9 2xl:!w-[70%] xmd:w-[65%]',
          className
        )}
      >
        {children}
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.children === newProps.children &&
    oldProps.className === newProps.className
)

export default Container
