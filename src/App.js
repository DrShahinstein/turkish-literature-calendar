import React, { useState, useEffect } from "react";
import Weeks from "./components/Weeks";
import InfoBox from "./components/InfoBox/InfoBox";
import { currentMonth, months, capitalize } from "./calendar-utilities";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import axios from "axios";
import "./App.css";

const API = process.env.REACT_APP_DJANGO_API;

function App() {
  const [infoBox, setInfoBox] = useState(false);
  const [month, setMonth] = useState(currentMonth);
  const [specialDays, setSpecialDays] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/special_days/`)
      .then((res) => setSpecialDays(res.data))
      .catch((err) => console.error(err));
  }, []);

  const goPreviousMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 0) {
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const goNextMonth = () => {
    setMonth((nextMonth) => {
      if (nextMonth === 11) {
        return 0;
      }
      return nextMonth + 1;
    });
  };

  return (
    <>
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
            <Weeks
              month={month}
              specialDays={specialDays}
              setInfoBox={setInfoBox}
            />
          </div>
        </div>
      </div>
      {infoBox && <InfoBox setInfoBox={setInfoBox} {...infoBox} />}
    </>
  );
}

export default App;
