import React, { useState, Fragment } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { range, capitalize } from "./calendar-utilities";
import shortid from "shortid";
import specialDays from "./specialDays.json";
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
  const startDay = new Date(currentYear, month, 1).getDay();
  const daysBefore = startDay === 0 ? 6 : startDay - 1;
  const daysAfter = 7 - ((daysBefore + daysInMonth) % 7);
  const dayRangeStart = 1 - daysBefore;
  const dayRangeEnd = daysInMonth + daysAfter;

  const weeks = range(dayRangeStart, dayRangeEnd).reduce((acc, day) => {
    const isToday = day === currentDate.getDate() && month === currentMonth;
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
          className={`calendar-day-slot 
           ${specialDay ? "special-day" : ""} 
           ${isToday ? "today" : ""}`}
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
      return [...acc.slice(0, lastWeekIndex), [...acc[lastWeekIndex], daySlot]];
    }
    return [...acc, [daySlot]];
  }, []);
  const lastWeek = weeks[weeks.length - 1];
  if (lastWeek.length < 7) {
    const deadSlots = range(0, 6 - lastWeek.length).map((day) => (
      <div className="calendar-day-slot dead-slot" key={shortid.generate()}>
        {day}
      </div>
    ));
    weeks[weeks.length - 1] = [...lastWeek, ...deadSlots];
  }

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
      console.log(`Clicked on ${specialDay.description}`);
    } else {
      console.log(`Clicked on day ${day}`);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-month-manager">
          <div className="calendar-month-forward">
            <button onClick={goPreviousMonth}>
              <AiFillCaretLeft />
            </button>
          </div>
          <div className="calendar-month">
            <h1>{capitalize(months[month].name)}</h1>
          </div>
          <div className="calendar-month-backward">
            <button onClick={goNextMonth}>
              <AiFillCaretRight />
            </button>
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
          {weeks.map((week, index) => (
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
