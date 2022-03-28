export interface ApartmentDefinitions {
  id: string
  name: string
  address: Address
  stars: number
  facilities: Facility[]
  capacity: capacity
  price: number
  image: string
}

export interface Address {
  zip_code: string
  city: string
  street: string
  house_number: string
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

export interface AdminApartmentDefinitions extends ApartmentDefinitions {
  images: string[]
  detailsHU: string
  detailsEN: string
  reviews: Review[]
  plusPrice: number
}

export const DefaultAdminApartment: AdminApartmentDefinitions = {
  id: '',
  name: '',
  address: {
    zip_code: '',
    street: '',
    city: '',
    house_number: '',
  },
  stars: 0,
  facilities: [],
  capacity: {
    capacity: 0,
    bedrooms: 0,
  },
  price: 0,
  plusPrice: 0,
  image: '',
  images: [],
  detailsHU: '',
  detailsEN: '',
  reviews: [],
}
