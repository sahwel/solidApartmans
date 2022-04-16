export const GetSimpleDate = (date: string | Date) => {
  var newDate = new Date(date)
  var dd = String(newDate.getDate()).padStart(2, '0')
  var mm = String(newDate.getMonth() + 1).padStart(2, '0')
  var yyyy = newDate.getFullYear()
  return { dd, mm, yyyy }
}

export const FormatDate = (date: Date) => {
  const { dd, mm, yyyy } = GetSimpleDate(date)
  return yyyy + '.' + mm + '.' + dd
}
