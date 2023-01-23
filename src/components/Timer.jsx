import './timer.scss'

function Timer() {
  return (
    <section className="timer">
      <div className="timer__wrapper">
        <div className="timer__inner">
          <div className="timer__wrapper-item">
            <span>10</span>
            <h4>Дней</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>10</span>
            <h4>Часов</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>10</span>
            <h4>Минут</h4>
          </div>
          <span>:</span>
          <div className="timer__wrapper-item">
            <span>10</span>
            <h4>Секунд</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timer
