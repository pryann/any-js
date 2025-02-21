function summa(a, b) {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Invalid input')
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new RangeError('Invalid value')
    }
    return a + b
  } catch (error) {
    console.error(error.message)
    return NaN
  } finally {
    console.log('summa function run ended')
  }
}

function subt(a, b) {
  return a - b
}

async function fetchUsers() {
  const users = await fetch('http://localhost:3000/userss')
  return users.json()
}

async function main() {
  // try ágba kerül az a kódrészlet amit tesztelni akarunk, ahol elképzelhető a hiba
  try {
    const response = await fetch('http://localhost:3000/userss')
    if (response.status !== 200) {
      throw new Error('Can not fetch users')
    }
    const usersJson = await response.json()
    console.log('users', usersJson)
  } catch (error) {
    // A catch ágban kezeljük a hibát, itt lehet kiírni a hibaüzenetet, vagy logolni, default valueket kezelni stb
    if (error instanceof TypeError) {
      console.error('TypeError', error)
    } else if (error instanceof SyntaxError) {
      console.error('SyntaxError', error)
    } else {
      console.error('Error', error.message)
    }
  }
}

main()
