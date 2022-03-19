import Image from 'next/image'
import { FunctionComponent, memo } from 'react'
import cl from 'classnames'

interface CustomImageProps {
  url: string
  alt: string
  classNames?: string
  imageClassName?: string
}

const CustomImage: FunctionComponent<CustomImageProps> = memo(
  function CustomImage({ url, alt, classNames = '', imageClassName = '' }) {
    return (
      <div className={cl('relative', classNames)}>
        <Image
          src={url}
          className={imageClassName}
          layout="fill"
          alt={alt}
          loading="lazy"
        />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.classNames === newProps.classNames &&
    oldProps.alt === newProps.alt &&
    oldProps.url === newProps.url &&
    oldProps.imageClassName === newProps.imageClassName
)

export default CustomImage
