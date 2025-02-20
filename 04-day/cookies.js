// limitek régen: rfc2109, total: 300 , 20/domain, és max 4K méretűek

// document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/'
// document.cookie = 'currency=HUF; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/'
// document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
// console.log(document.cookie)

// Object.fromEntries(document.cookie.split('; ').map((cookie) => cookie.split('=')))
// const cookies = document.cookie.split('; ')
// const cookiePairs = cookies.map((cookie) => cookie.split('='))
// console.log(cookiePairs)
// const cookiesObject = Object.fromEntries(cookiePairs)
// console.log(cookiesObject)

const cookieHandler = {
  getCookies() {
    const cookies = document.cookie ? document.cookie.split('; ') : []
    const cookiePairs = cookies.map((cookie) => cookie.split('='))
    return cookiePairs.length ? Object.fromEntries(cookiePairs) : {}
  },
  getCookie(name) {
    return this.getCookies()[name]
  },
  setCookie(name, value, expirationDate = new Date(), path = '/') {
    expirationDate.setFullYear(expirationDate.getFullYear() + 1)
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=${path}`
  },
  deleteCookie(name) {
    this.setCookie(name, '', new Date('Thu, 01 Jan 1970 00:00:00 UTC'))
  },
  clearCookies() {
    Object.keys(this.getCookies()).forEach((cookie) => this.deleteCookie(cookie))
  },
}

console.log(cookieHandler.getCookies())

cookieHandler.setCookie('username', 'John Doe')
cookieHandler.setCookie('currency', 'HUF')
cookieHandler.setCookie('lang', 'HU')

console.log(cookieHandler.getCookies())
cookieHandler.deleteCookie('username')
console.log(cookieHandler.getCookies())
// cookieHandler.clearCookies()
console.log(cookieHandler.getCookie('lang'))
console.log(cookieHandler.getCookies())
