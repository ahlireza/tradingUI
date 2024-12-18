//------------------------------
//---just Type Number
//------------------------------
export function justTypeNumber(number: any) {
    number = number.replace(/[^0-9]/g, "")
    return number
  }
  
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] 

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] 

//------------------------------
//---get Current Date
//------------------------------
export function getCurrentDate() { 
  const currentDate = new Date()
    
  //---Time
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  //---Date
  const day = currentDate.getDate()
  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  return ` ${hours}:${minutes} - (${dayOfWeek} ${day} ${month}, ${year})`
}
  
//------------------------------
//---get Next Day
//------------------------------
export function getNextDay() {
  const currentDate = new Date()
  const nextday = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)
    
  //---Date
  const day = nextday.getDate()
  const dayOfWeek = daysOfWeek[nextday.getDay()]
  const month = months[nextday.getMonth()]
  const year = nextday.getFullYear()

  return `${dayOfWeek} ${day} ${month}, ${year}`
}
