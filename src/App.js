import React, { useState, Fragment } from "react";
import specialDays from "./specialDays.json";
import { range, capitalize } from "./calendar-utilities";
import shortid from "shortid";
import "./App.css";

function App() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const isLeapYear =
    currentYear % 4 === 0 &&
    (currentYear % 100 !== 0 || currentYear % 400 === 0);
  const months = {
    0: { name: "ocak", days: 31 },
    1: { name: "şubat", days: isLeapYear ? 29 : 28 },
    2: { name: "mart", days: 31 },
    3: { name: "nisan", days: 30 },
    4: { name: "mayıs", days: 31 },
    5: { name: "haziran", days: 30 },
    6: { name: "temmuz", days: 31 },
    7: { name: "ağustos", days: 31 },
    8: { name: "eylül", days: 30 },
    9: { name: "ekim", days: 31 },
    10: { name: "kasım", days: 30 },
    11: { name: "aralık", days: 31 },
  };
  const [month, setMonth] = useState(currentMonth);
  const daysInMonth = months[month].days;

  const goPreviousMonth = () => {
    setMonth((prevMonth) => prevMonth - 1);
  };

  const goNextMonth = () => {
    setMonth((nextMonth) => nextMonth + 1);
  };

  const handleDayClick = (day) => {
    const specialDay = specialDays.find(
      (d) => d.month === month && d.day === day
    );

    if (specialDay) {
      // Do something with the special day information
      console.log(`Clicked on ${specialDay.description}`);
    } else {
      // Handle click on a regular day
      console.log(`Clicked on day ${day}`);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-month-manager">
          <div className="calendar-month-forward">
            <button onClick={goPreviousMonth}>{"<"}</button>
          </div>
          <div className="calendar-month">
            <h1>{capitalize(months[month].name)}</h1>
          </div>
          <div className="calendar-month-backward">
            <button onClick={goNextMonth}>{">"}</button>
          </div>
        </div>
      </div>
      <div className="calendar-body">
        <div className="calendar-weekdays">
          <div>Pzt</div>
          <div>Sal</div>
          <div>Çar</div>
          <div>Per</div>
          <div>Cum</div>
          <div>Cmt</div>
          <div>Paz</div>
        </div>
        <div className="calendar-weeks">
          {range(1 - currentDate.getDay(), 35)
            .reduce((acc, day) => {
              const specialDay = specialDays.find(
                (d) => d.month === month && d.day === day
              );
              if (day < 1 || !(day <= daysInMonth)) {
                var daySlot = (
                  <div
                    className={`calendar-day-slot dead-slot ${
                      specialDay ? "special-day" : ""
                    }`}
                    onClick={() => handleDayClick(day)}
                    key={shortid.generate()}
                  >
                    {day}
                  </div>
                );
              } else {
                var daySlot = (
                  <div
                    className={`calendar-day-slot ${
                      specialDay ? "special-day" : ""
                    }`}
                    onClick={() => handleDayClick(day)}
                    key={shortid.generate()}
                  >
                    {day}
                  </div>
                );
              }
              if (acc.length === 0) {
                return [[daySlot]];
              }
              const lastWeekIndex = acc.length - 1;
              if (acc[lastWeekIndex].length < 7) {
                return [
                  ...acc.slice(0, lastWeekIndex),
                  [...acc[lastWeekIndex], daySlot],
                ];
              }
              return [...acc, [daySlot]];
            }, [])
            .map((week, index) => (
              <div className="calendar-week" key={index}>
                {week.map((day) => (
                  <Fragment key={shortid.generate()}>{day}</Fragment>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
