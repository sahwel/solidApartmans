import { FunctionComponent } from 'react'
import cl from 'classnames'

interface ContainerProps {
  classNames?: string
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  classNames,
}) => {
  return (
    <div
      className={cl(
        'mx-auto min-h-screen w-full space-y-5 bg-gray-200 md:mb-12 md:!mt-10 md:min-h-0 md:w-[75%] md:rounded-2xl md:drop-shadow-2xl lg:!w-[90%] lg:space-y-0 lg:bg-white lg:p-9 2xl:!w-[70%] xmd:w-[65%]',
        classNames
      )}
    >
      {children}
    </div>
  )
}

export default Container
