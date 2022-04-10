export const CookieManager = {
  create: (cname: string, cvalue: string, exdays: number) => {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'solid-apartmans-expires-' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  },
  read: (cname: string) => {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (const c in ca) {
      while (c.charAt(0) == ' ') c.substring(1)
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
    return ''
  },
  remove: function (cname: string) {
    this.create(cname, '', -1)
  },
}
