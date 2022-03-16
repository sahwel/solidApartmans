import { useState, useCallback } from 'react'

const ApartmentDeatils = () => {
  const show = useCallback(() => {
    setIsShow((oldState) => !oldState)
  }, [])

  const [isShow, setIsShow] = useState(false)
  return (
    <div className=" bg-white p-3  lg:m-0 lg:h-[75%] lg:w-full lg:pb-0  xl:h-[80%]">
      <h1 className="overflow-y-auto text-lg font-bold lg:hidden">Details</h1>
      <p
        className={`lg:h-full ${
          isShow ? 'max-h-full' : 'max-h-[20rem]'
        } overflow-y-hidden text-justify text-sm lg:m-0 lg:max-h-full  lg:overflow-y-auto  lg:pr-4`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
        elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
        cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
        Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
        elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
        cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
        Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
        Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
        elit dolor, venenatis et felis non, imperdiet lacinia tellus. Cras
        cursus mattis erat, ac maximus sem. Mauris fringilla posuere aliquam.
        Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
        mattis sem. Sed lacinia elit ut purus facilisis pellentesque. Quisque
        Aenean lectus lorem, porta pellentesque tincidunt non, efficitur ut est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel elit
        dolor, venenatis et felis non, imperdiet lacinia tellus. Cras cursus
        mattis erat, ac maximus sem. Mauris fringilla posuere aliquam. Aenean
        lectus lorem, porta pellentesque tincidunt non, efficitur ut est. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis sem.
        Sed lacinia elit ut purus facilisis pellentesque. Quisque Aenean lectus
        lorem, porta pellentesque tincidunt non, efficitur ut est. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nulla vel Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nulla vel mattis sem. Sed lacinia
        elit ut purus facilisis pellentesque. Quisque elit dolor, venenatis et
        felis non, imperdiet lacinia tellus. Cras elit dolor, venenatis et felis
        non, imperdiet lacinia tellus. Cras cursus mattis erat, ac maximus sem.
        Mauris fringilla posuere aliquam. Aenean lectus lorem, porta
        pellentesque tincidunt non, efficitur ut est.
      </p>
      <p
        className="ml-3 cursor-pointer text-sm underline lg:hidden"
        onClick={show}
      >
        {isShow ? 'Less' : 'Show more'}
      </p>
    </div>
  )
}

export default ApartmentDeatils
