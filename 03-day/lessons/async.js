// async: timers, event, xmlhttprequest

function logAndChange() {
  let name = 'Lulu'
  console.log(name)
  setTimeout(() => {
    name = 'Anulu'
    console.log(name)
  }, 3000)
}

// logAndChange()

console.log('START')

setTimeout(() => {
  console.log('Nulla')
}, 0)

console.log('STOP')

const counterInterval = setInterval(() => {
  console.log(new Date())
}, 1000)

// Do not forgot to stop the interval
// clearInterval(counterInterval)
