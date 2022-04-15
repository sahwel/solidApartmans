export interface ReservationFilterDto {
  freeTextSearch: string | null
  start: Date
  end: Date | null
}
