import { FunctionComponent } from 'react'

const Container: FunctionComponent = ({ children }) => {
  return (
    <div className="mx-auto  min-h-screen w-full space-y-5 bg-gray-200 md:mb-12 md:!mt-10 md:min-h-0 md:w-[90%] md:rounded-2xl md:drop-shadow-2xl lg:space-y-0 lg:bg-white lg:p-9 2xl:w-[85%] ">
      {children}
    </div>
  )
}

export default Container
