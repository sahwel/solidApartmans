export interface ApartmentDefinitions {
  _id: string
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

export interface AdminHomeApartmentModel {
  _id: string
  name: string
  address: Address
}

export interface Facility {
  nameHU: string
  nameEN: string
  url: string
}

export interface AdminFacility extends Facility {
  _id: string
  selected: boolean
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
  detailsHU: string
  detailsEN: string
  reviews: Review[]
}

export interface AdminApartmentDefinitions extends ApartmentDefinitions {
  images: string[]
  detailsHU: string
  detailsEN: string
  facilities: AdminFacility[]
  reviews: Review[]
  plusPrice: number
}

export interface ApartmentsNames {
  _id: string
  name: string
}

export const DefaultAdminApartment: AdminApartmentDefinitions = {
  _id: '',
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
    capacity: 1,
    bedrooms: 1,
  },
  price: 1,
  plusPrice: 1,
  image: '',
  images: [],
  detailsHU: '',
  detailsEN: '',
  reviews: [],
}
