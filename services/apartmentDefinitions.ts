export interface ApartmentDefinitions {
  id: string
  name: string
  address: string
  stars: number
  facilities: string[]
  capacity: {
    capacity: number
    bedrooms: number
  }
  price: number
  image: string
}
