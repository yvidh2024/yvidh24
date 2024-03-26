import React, { useState, useEffect } from 'react';
import './counter.css';

function CountDownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const newYear = "2024-04-04";

  useEffect(() => {
    const interval = setInterval(() => {
      const nowDate = new Date();
      const newYearDate = new Date(newYear);
      const totalSeconds = (newYearDate - nowDate) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      setDays(formatTime(days));
      setHours(formatTime(hours));
      setMinutes(formatTime(minutes));
      setSeconds(formatTime(seconds));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time > 10 ? time : `0${time}`;
  };

  return (
    <div className="container">
      <div className="cd_timer">
        <div className="cd_container">
          <div className="time day">{days}</div>
          <span className="time_text">Days</span>
        </div>
        <div className="cd_container">
          <div className="time hour">{hours}</div>
          <span className="time_text">Hours</span>
        </div>
        <div className="cd_container">
          <div className="time minute">{minutes}</div>
          <span className="time_text">Minutes</span>
        </div>
        <div className="cd_container">
          <div className="time second">{seconds}</div>
          <span className="time_text">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountDownTimer;
