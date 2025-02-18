const users = [
  {
    id: 1,
    firstName: 'Karyn',
    lastName: 'Abbets',
    email: 'kabbets0@utexas.edu',
  },
  {
    id: 2,
    firstName: 'Helsa',
    lastName: 'Christian',
    email: 'hchristian1@smugmug.com',
  },
  {
    id: 3,
    firstName: 'Hercule',
    lastName: 'Walklett',
    email: 'hwalklett2@mysql.com',
  },
  {
    id: 4,
    firstName: 'Ilsa',
    lastName: 'Sorbey',
    email: 'isorbey3@indiegogo.com',
  },
  {
    id: 5,
    firstName: 'Alexandr',
    lastName: 'Moniker',
    email: 'amoniker4@amazonaws.com',
  },
  {
    id: 6,
    firstName: 'Merrill',
    lastName: 'Sibly',
    email: 'msibly5@slate.com',
  },
  {
    id: 7,
    firstName: 'Ambrose',
    lastName: 'Schirak',
    email: 'aschirak6@bluehost.com',
  },
  {
    id: 8,
    firstName: 'Kris',
    lastName: 'Binnes',
    email: 'kbinnes7@engadget.com',
  },
  {
    id: 9,
    firstName: 'Connor',
    lastName: 'Toseland',
    email: 'ctoseland8@ed.gov',
  },
  {
    id: 10,
    firstName: 'Normy',
    lastName: 'Stolz',
    email: 'nstolz9@jugem.jp',
  },
  {
    id: 11,
    firstName: 'Tam',
    lastName: 'McGee',
    email: 'tmcgeea@illinois.edu',
  },
  {
    id: 12,
    firstName: 'Grove',
    lastName: 'Farenden',
    email: 'gfarendenb@usnews.com',
  },
  {
    id: 13,
    firstName: 'Ed',
    lastName: 'Hinder',
    email: 'ehinderc@ihg.com',
  },
  {
    id: 14,
    firstName: 'Faydra',
    lastName: 'Braisby',
    email: 'fbraisbyd@jalbum.net',
  },
  {
    id: 15,
    firstName: 'Shaun',
    lastName: 'Teliga',
    email: 'steligae@geocities.com',
  },
  {
    id: 16,
    firstName: 'Clarance',
    lastName: 'Hugonneau',
    email: 'chugonneauf@shutterfly.com',
  },
  {
    id: 17,
    firstName: 'Fons',
    lastName: 'Battelle',
    email: 'fbattelleg@ebay.co.uk',
  },
  {
    id: 18,
    firstName: 'Leora',
    lastName: 'Yvon',
    email: 'lyvonh@wordpress.com',
  },
  {
    id: 19,
    firstName: 'Deina',
    lastName: 'Sherbrooke',
    email: 'dsherbrookei@boston.com',
  },
  {
    id: 20,
    firstName: 'Steward',
    lastName: 'McKmurrie',
    email: 'smckmurriej@123-reg.co.uk',
  },
]

function generateTemplate(user) {
  return `
    <tr>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
}

function generateTable(users) {
  return users.map(generateTemplate).join('')
}

function renderTable(users) {
  const tbody = document.querySelector('#users tbody')
  tbody.innerHTML = generateTable(users)
}

renderTable(users)

// document.onload = renderTable(users)

// const tbody = document.querySelector('#users tbody')

// let usersTemplate = ''
// for (let user of users) {
//   // const tr = document.createElement('tr')
//   // const tdId = document.createElement('td')
//   // tdId.textContent = user.id
//   // tr.appendChild(tdId)
//   // const tdFirstName = document.createElement('td')
//   // tdFirstName.textContent = user.firstName
//   // tr.appendChild(tdFirstName)
//   // const tdLastName = document.createElement('td')
//   // tdLastName.textContent = user.lastName
//   // tr.appendChild(tdLastName)
//   // const tdEmail = document.createElement('td')
//   // tdEmail.textContent = user.email
//   // tr.appendChild(tdEmail)
//   // tbody.appendChild(tr)
//   // DO NOT TO THIS!!!!
//   // const template = `
//   // <tr>
//   //   <td>${user.id}</td>
//   //   <td>${user.firstName}</td>
//   //   <td>${user.lastName}</td>
//   //   <td>${user.email}</td>
//   // </tr>`
//   usersTemplate += `
//     <tr>
//       <td>${user.id}</td>
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.email}</td>
//     </tr>`
// }

// tbody.innerHTML = usersTemplate
