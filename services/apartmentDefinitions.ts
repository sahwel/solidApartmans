export interface ApartmentDefinitions {
  id: string
  name: string
  address: string
  stars: number
  facilities: Facility[]
  capacity: capacity
  price: number
  image: string
}

export interface Facility {
  name: string
  url: string
}

export interface capacity {
  capacity: number
  bedrooms: number
}

export interface Review {
  customer: string
  review: string
  stars: number
  timeAgo: string
}

export interface ExtendedApartmentDefinition extends ApartmentDefinitions {
  images: string[]
  details: string
  reviews: Review[]
}
