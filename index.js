import data from "./data.json" assert { type: "json" };

const chart = document.querySelector(".chart");
const maxAmount = Math.max(...data.map(object => object.amount))

for (const value of data) {
  const bar = document.createElement("div");
  bar.classList.add("bar");
 
  //first div, amount
  const firstDiv = document.createElement("div")
  firstDiv.innerHTML = `$${value.amount}`
  firstDiv.setAttribute('class', 'amount')

  //second div, bar
  const secondDiv = document.createElement("div")
  secondDiv.setAttribute('class', 'bar-column')
  const height = ((value.amount / maxAmount) * 120) + 'px' // calculate bar height (max height 120px)
  secondDiv.style.height = height
  secondDiv.setAttribute('data-amount', value.amount)
  secondDiv.setAttribute('id',`${value.day}`)
  if (getDayName() === value.day) {
    secondDiv.classList.add('today-bar')
  }

  // day
  const p = document.createElement("p")
  p.innerHTML = `${value.day}`

  bar.appendChild(firstDiv)
  bar.appendChild(secondDiv)
  bar.appendChild(p)
  chart.appendChild(bar)
}

function getDayName(date = new Date(), locale = 'en-US') {
  return date.toLocaleDateString(locale, {weekday: 'long'}).substring(0,3).toLowerCase()
}
