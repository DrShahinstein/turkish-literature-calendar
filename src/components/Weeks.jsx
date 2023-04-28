import React, { Fragment } from "react";
import {
  range,
  findSpecialDay,
  months,
  currentMonth,
  currentYear,
} from "../calendar-utilities";
import shortid from "shortid";

export default function Weeks({ specialDays, setInfoBox, month }) {
  const currentDate = new Date();
  const daysInMonth = months[month].days;
  const startDay = new Date(currentYear, month, 1).getDay();
  const daysBefore = startDay === 0 ? 6 : startDay - 1;
  const daysAfter = 7 - ((daysBefore + daysInMonth) % 7);
  const dayRangeStart = 1 - daysBefore;
  const dayRangeEnd = daysInMonth + daysAfter;
  const weeks = range(dayRangeStart, dayRangeEnd).reduce((acc, day) => {
    var daySlot;
    const isToday = day === currentDate.getDate() && month === currentMonth;
    const specialDay = findSpecialDay(specialDays, month, day);

    if (day < 1 || !(day <= daysInMonth)) {
      daySlot = (
        <div className={`calendar-day-slot dead-slot`} key={shortid.generate()}>
          {day}
        </div>
      );
    } else {
      daySlot = (
        <div
          className={`calendar-day-slot 
               ${specialDay ? "special-day" : ""}  
               ${isToday ? "today" : ""}`}
          style={
            specialDay ? { backgroundColor: specialDay.highlight_color } : {}
          }
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

  const handleDayClick = (day) => {
    const specialDay = findSpecialDay(specialDays, month, day);
    if (specialDay) {
      setInfoBox({
        title: specialDay.title,
        description: specialDay.description,
      });
    }
  };

  return (
    <>
      {weeks.map((week, index) => (
        <div className="calendar-week" key={index}>
          {week.map((day) => (
            <Fragment key={shortid.generate()}>{day}</Fragment>
          ))}
        </div>
      ))}
    </>
  );
}
