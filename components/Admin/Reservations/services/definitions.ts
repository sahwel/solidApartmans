import { AdmiReservationModel } from '../../../../services/reservationsDefinitions'

export interface ReservationFilterDto {
  freeTextSearch: string | null
  apartment: string
  start: Date
  end: Date | null
}
export interface ReservationProps {
  reservation: AdmiReservationModel
}
export type PaymentMethod = 'credit card' | 'bank transfer'

export const lookReservation = (
  reservation: AdmiReservationModel,
  newReservation: AdmiReservationModel
) =>
  reservation._id === newReservation._id &&
  reservation.arrive === reservation.arrive &&
  reservation.leave === reservation.leave &&
  reservation.method === reservation.method &&
  reservation.payed === reservation.payed &&
  reservation.total === reservation.total &&
  reservation.customer.address.city === reservation.customer.address.city &&
  reservation.customer.address.country ===
    reservation.customer.address.country &&
  reservation.customer.address.house_number ===
    reservation.customer.address.house_number &&
  reservation.customer.address.other === reservation.customer.address.other &&
  reservation.customer.address.street === reservation.customer.address.street &&
  reservation.customer.address.zip_code ===
    reservation.customer.address.zip_code &&
  reservation.customer.babyBed === reservation.customer.babyBed &&
  reservation.customer.companyName === reservation.customer.companyName &&
  reservation.customer.email === reservation.customer.email &&
  reservation.customer.firstName === reservation.customer.firstName &&
  reservation.customer.highChair === reservation.customer.highChair &&
  reservation.customer.lastName === reservation.customer.lastName &&
  reservation.customer.numberOfAdults === reservation.customer.numberOfAdults &&
  reservation.customer.numberOfKids === reservation.customer.numberOfKids &&
  reservation.customer.phone === reservation.customer.phone &&
  reservation.customer.privatePerson === reservation.customer.privatePerson &&
  reservation.customer.taxNumber === reservation.customer.taxNumber &&
  reservation.customer.underTwoYear === reservation.customer.underTwoYear &&
  reservation.apartment._id === reservation.apartment._id &&
  reservation.apartment.name === reservation.apartment.name
