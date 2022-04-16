export interface ReservationFilterDto {
  freeTextSearch: string | null
  apartment: string
  start: Date
  end: Date | null
}
