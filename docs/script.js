function getTimeRemaining () {
  const today = new Date()
  const xmas = new Date('Dec 25, 2021')
  const millis = Math.abs(xmas - today)
  var days, hours, minutes, seconds, totalHours, totalMinutes, totalSeconds

  totalSeconds = parseInt(Math.floor(millis / 1000))
  totalMinutes = parseInt(Math.floor(totalSeconds / 60))
  totalHours = parseInt(Math.floor(totalMinutes / 60))
  seconds = parseInt(totalSeconds % 60)
  minutes = parseInt(totalMinutes % 60)
  hours = parseInt(totalHours % 24)
  days = parseInt(Math.floor(totalHours / 24))

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

function initializeClock (id) {
  var clock, daysSpan, hoursSpan, minutesSpan, secondsSpan

  clock = document.getElementById(id)
  daysSpan = clock.querySelector('.days')
  hoursSpan = clock.querySelector('.hours')
  minutesSpan = clock.querySelector('.minutes')
  secondsSpan = clock.querySelector('.seconds')

  function updateClock () {
    var t = getTimeRemaining()

    daysSpan.innerHTML = t.days
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
  }

  updateClock()
  setInterval(updateClock, 1000)
}

initializeClock('clockdiv')
