import { useEffect, useRef, useState } from 'react'
import './timer.scss'

function Timer() {
  const [daysInterval, setDaysInterval] = useState('00')
  const [hoursInterval, setHoursInterval] = useState('00')
  const [minutesInterval, setMinutesInterval] = useState('00')
  const [secondsInterval, setSecondsInterval] = useState('00')
  const intervalId = useRef(null)

  const timer = () => {
    const endDate = new Date('April 19, 2023, 00:00:00').getTime()

    intervalId.current = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0')
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, '0')
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0')
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0')

      if (distance <= 0) {
        clearInterval(intervalId.current)
      } else {
        setDaysInterval(days)
        setHoursInterval(hours)
        setMinutesInterval(minutes)
        setSecondsInterval(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    timer()
    return () => clearInterval(intervalId.current)
  })

  return (
    <section className="timer">
      <div className="timer__wrapper">
        <div className="timer__inner">
          <div className="timer__wrapper-item">
            <span>{daysInterval}</span>
            <h4>Дней</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>{hoursInterval}</span>
            <h4>Часов</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>{minutesInterval}</span>
            <h4>Минут</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>{secondsInterval}</span>
            <h4>Секунд</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timer
