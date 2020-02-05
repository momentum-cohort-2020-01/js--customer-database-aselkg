function capitalizeFirstLetter (string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1)
    })
    .join(' ')
}

const main = document.querySelector('.header')
const title = document.createElement('h1')
title.textContent = 'Customer Database'
main.classList.add('title')
main.appendChild(title)

function createMenuListItem (customer) {
  const customerData = document.createElement('div')
  customerData.classList.add('row')

  // image element
  const img = document.createElement('img')
  img.src = customer.picture.large
  customerData.appendChild(img)
  img.classList.add('picture')

  // name element
  const name = document.createElement('h2')
  name.textContent = capitalizeFirstLetter(customer.name.first) + ' ' + capitalizeFirstLetter(customer.name.last)
  customerData.appendChild(name)

  // email element
  const email = document.createElement('div')
  email.textContent = customer.email
  customerData.appendChild(email)
  email.classList.add('email')

  // adress element
  const address = document.createElement('div')
  address.innerHTML = capitalizeFirstLetter(customer.location.street) + '<br>' +
  capitalizeFirstLetter(customer.location.city) + ',' + nameToAbbr(customer.location.state) + ' ' + customer.location.postcode
  customerData.appendChild(address)

  // Date of birth element
  const dateOfBirth = document.createElement('div')
  dateOfBirth.textContent = 'DOB: ' + moment(customer.dob).format('MMM D, YYYY')
  customerData.appendChild(dateOfBirth)

  // Registered element
  const customerSince = document.createElement('div')
  customerSince.textContent = 'Customer since: ' + moment(customer.registered).format('MMM D, YYYY')
  customerData.appendChild(customerSince)

  return customerData
}

function showMenuItems () {
  const personData = document.querySelector('.box')

  for (const item of customers) {
    const customerData = createMenuListItem(item)
    personData.appendChild(customerData)
  }
}

showMenuItems()
