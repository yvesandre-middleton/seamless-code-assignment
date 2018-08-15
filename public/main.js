const fullName = document.querySelector('.name')
const organizationName = document.querySelector('.organization-name')
const gender = document.querySelector('.gender')
const conditionsLength = document.querySelector('.conditions-length')
const conditions = document.querySelector('.conditions')

fetch('patient_fixed.json')
  .then(res => res.json())
  .then(data => {
    fullName.innerHTML = `${data.identifier[0].name[0].given} ${data.identifier[0].name[0].family}`
    organizationName.innerHTML = data.managingOrganization.display
    gender.innerHTML = data.gender
    data.Conditons.conditions.forEach(condition => {
      const li = document.createElement('li')
      li.innerHTML = `${condition}`
      conditions.appendChild(li)
    })
    conditionsLength.innerHTML = data.Conditons.conditions.length
  })