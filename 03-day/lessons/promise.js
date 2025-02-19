// Promise állapotai: pending, fulfilled (resolved), rejected (rejected)
// A Promise egy aszinkron műveletet burkol be
// A Promise konstruktor egy executor függvényt vár, ami két paraméterrel rendelkezik: resolve, reject
const samplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Promise is fulfilled')
    } else {
      reject('Promise is rejected')
    }
  }, 3000)
})

// A Promise objektumra a then metódussal lehet feliratkozni

console.log('START')

// samplePromise.then(
//   (data) => console.log(data),
//   (error) => console.error(error)
// )

samplePromise
  .then((data) => console.log(data)) // if OK
  .catch((error) => console.error(error)) // if rejected
  .finally(() => console.log('Promise is done')) // always run


console.log('STOP')
