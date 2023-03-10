// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  // Write your code here
  // const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']
  // const x = new Date(dateString)
  // console.log(x);
  // let dayName = days[x.getDay()]
  // return dayName

  const date = new Date(dateString)
  const options = {
    weekday: 'long',
  }
  return new Intl.DateTimeFormat('en-Us', options).format(date)
}

let dateString = '11/10/2010'

console.log(getDayName(dateString))
