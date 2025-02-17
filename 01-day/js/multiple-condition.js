const tempreature = 10
const humidity = 70
const rain = false

/// && > ||

if (tempreature > 20 && humidity > 50 && !rain) {
  console.log('Nincs hideg')
}

if (tempreature > 20 || humidity < 70 || !rain) {
  console.log('Száraz idő')
}

if ((tempreature > 20 || humidity > 50 ) && !rain) {
  console.log('Nincs hideg')
}
