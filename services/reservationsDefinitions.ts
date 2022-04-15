export interface AdmiReservationModel {
  _id: string
  arrive: Date
  leave: Date
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
    taxNumber?: string
    companyName?: string
    address: {
      country: string
      zip_code: string
      city: string
      street: string
      house_number: number
      other: string
    }
    numberOfAdults: number
    numberOfKids: number
    underTwoYear: boolean
    babyBed: boolean
    highChair: boolean
    privatePerson: boolean
    apartment: ReservationApartmentDefinitions
  }
}

export interface ReservationApartmentDefinitions {
  _id: string
  name: string
}
