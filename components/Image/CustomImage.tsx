import Image from 'next/image'
import { FunctionComponent, memo } from 'react'
import cl from 'classnames'

interface CustomImageProps {
  url: string
  alt: string
  className?: string
  imageClassName?: string
  isFromApi?: boolean
  onClick?: () => void
}

const CustomImage: FunctionComponent<CustomImageProps> = memo(
  function CustomImage({
    url,
    alt,
    className = '',
    imageClassName = '',
    isFromApi = false,
    onClick = () => ({}),
  }) {
    return (
      <div className={cl('relative', className)} onClick={onClick}>
        <Image
          src={isFromApi ? process.env.NEXT_PUBLIC_BASE_URL + url : '/' + url}
          className={imageClassName}
          layout="fill"
          alt={alt}
          loading="lazy"
        />
      </div>
    )
  },
  (oldProps, newProps) =>
    oldProps.className === newProps.className &&
    oldProps.alt === newProps.alt &&
    oldProps.url === newProps.url &&
    oldProps.isFromApi === newProps.isFromApi &&
    oldProps.imageClassName === newProps.imageClassName
)

export default CustomImage
