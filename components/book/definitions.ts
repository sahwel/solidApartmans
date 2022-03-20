export interface BookFormModel {
  companyName: string
  taxNumber: string
  firstName: string
  lastName: string
  country: string
  zipCode: string
  street: string
  houseNumber: string
  other: string
  email: string
  phoneNumber: string
  numberOfAdults: number
  numberOfKids: number
  underTwoYears: boolean
  babyBed: boolean
  highChair: boolean
  arrive: string // todo: date
  left: string // todo: date
}
