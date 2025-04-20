import React, { useState } from "react";
import Styles from "./Datepicker.module.css";

class Day {
  date: string;
  day: string;
  constructor(date: string, day: string) {
    this.date = date;
    this.day = day;
  }

  format(str = "dddd") {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "d") {
        count++;
      }
    }

    switch (count) {
      case 2:
        return `${this.date}`.length === 1 ? `0${this.date}` : `${this.date}`;
      case 3:
        return this.day.slice(0, 3);
      case 4:
        return this.day;

      default:
        break;
    }
  }
}

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const ensureTwoDigits = (value: any) => {
  if (`${value}`.length === 1) {
    return `0${value}`;
  }

  return `${value}`;
};

const Datepicker = ({
  value = "1970-01-01",
  onChange = () => {},
  yearPrevBtnIcon = (
    <svg
      width="40px"
      height="40px"
      viewBox="-8.88 -8.88 41.76 41.76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#191919"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
      style={{
        minWidth: "30px",
      }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
          stroke="#000000"
          strokeWidth="1.32"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  yearNextBtnIcon = (
    <svg
      width="64px"
      height="64px"
      viewBox="-8.88 -8.88 41.76 41.76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#191919"
      transform="matrix(1, 0, 0, -1, 0, 0)"
      style={{
        minWidth: "30px",
      }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
          stroke="#000000"
          strokeWidth="1.32"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  ),
  monthPrevBtnIcon = (
    <svg
      width="40px"
      height="40px"
      viewBox="-8.88 -8.88 41.76 41.76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#191919"
      style={{
        minWidth: "25px",
      }}
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
          stroke="#000000"
          strokeWidth="1.32"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  monthNextBtnIcon = (
    <svg
      width="64px"
      height="64px"
      viewBox="-8.88 -8.88 41.76 41.76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#191919"
      transform="matrix(1, 0, 0, -1, 0, 0)"
      style={{
        minWidth: "25px",
      }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
          stroke="#000000"
          strokeWidth="1.32"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  ),
  rootContainerClassName,
  pickerHeaderContainerClassName,
  yearBtnsClassName,
  yearPrevBtnClassName,
  monthBtnsClassName,
  monthPrevBtnClassName,
  monthYearContainerClassName,
  monthTextClassName,
  yearTextClassName,
  monthNextBtnClassName,
  yearNextBtnClassName,
  daysContainerClassName,
  weekDayHeaderItemClassName,
  emptyFillToDaysDivClassName,
  dayBtnClassName,
  todayBtnClassName,
  selectedBtnClassName,
}: any) => {
  const today = new Date(
    parseInt(value.slice(0, 4)),
    parseInt(value.slice(5, 7)) - 1,
    parseInt(value.slice(8, 10))
  );
  const [todayFormatted, setTodayFormatted] = useState(
    new Date().toJSON().slice(0, 10)
  );
  const [selectedDate, setSelectedDate] = useState({
    dateString: `${ensureTwoDigits(today.getDate())}-${ensureTwoDigits(
      today.getMonth() + 1
    )}-${today.getFullYear()}`,
    month: `${ensureTwoDigits(today.getMonth() + 1)}`,
    day: `${ensureTwoDigits(today.getDate())}`,
    year: `${today.getFullYear()}`,
  });

  setInterval(() => {
    setTodayFormatted(new Date().toJSON().slice(0, 10));
  }, 100000);

  const daysOfTheMonth = new Date(
    parseInt(selectedDate.year),
    parseInt(selectedDate.month),
    0
  ).getDate();

  let monthDays: Day[] = [];

  for (let i = 0; i < daysOfTheMonth; i++) {
    let day = new Day(
      ensureTwoDigits(`${i + 1}`),
      DAYS[new Date(parseInt(selectedDate.year), parseInt(selectedDate.month) - 1, i + 1).getDay()]
    );
    monthDays.push(day);
  }

  const handleSelectDay = (day: any) => {
    setSelectedDate((prev) => ({
      ...prev,
      dateString: `${day.format("dd")}-${selectedDate.month}-${
        selectedDate.year
      }`,
      day: day.format("dd"),
    }));
    onChange(`${selectedDate.year}-${selectedDate.month}-${day.format("dd")}`);
  };

  const getPrevMonth = () => {
    let newMonth = parseInt(selectedDate.month) - 1;
    if (newMonth === 0) {
      setSelectedDate((prev) => ({
        ...prev,
        dateString: `${prev.day}-${12}-${parseInt(prev.year) - 1}`,
        month: `${12}`,
        year: `${parseInt(prev.year) - 1}`,
      }));
      return;
    }
    setSelectedDate((prev) => ({
      ...prev,
      dateString: `${prev.day}-${ensureTwoDigits(newMonth)}-${
        selectedDate.year
      }`,
      month: ensureTwoDigits(newMonth),
    }));
  };

  const getnextMonth = () => {
    let newMonth = parseInt(selectedDate.month) + 1;
    if (newMonth === 13) {
      setSelectedDate((prev) => ({
        ...prev,
        dateString: `${prev.day}-0${1}-${parseInt(prev.year) + 1}`,
        month: `0${1}`,
        year: `${parseInt(prev.year) + 1}`,
      }));
      return;
    }
    setSelectedDate((prev) => ({
      ...prev,
      dateString: `${prev.day}-${ensureTwoDigits(newMonth)}-${
        selectedDate.year
      }`,
      month: ensureTwoDigits(newMonth),
    }));
  };

  const getPrevYear = () => {
    setSelectedDate((prev) => ({
      ...prev,
      dateString: `${prev.day}-${prev.month}-${parseInt(prev.year) - 1}`,
      year: `${parseInt(prev.year) - 1}`,
    }));
  };

  const getnextYear = () => {
    setSelectedDate((prev) => ({
      ...prev,
      dateString: `${prev.day}-${prev.month}-${parseInt(prev.year) + 1}`,
      year: `${parseInt(prev.year) + 1}`,
    }));
  };

  const renderWeekDaysHeader = () => {
    {
      let divs: number[] = [];
      for (let i = 0; i < 7; i++) {
        divs.push(i);
      }
      return divs.map((weekDayNo) => (
        <div
          key={weekDayNo}
          className={`${Styles.weekDayHeaderItem} ${weekDayHeaderItemClassName}`}
        >
          {DAYS[weekDayNo]?.slice(0, 3)}
        </div>
      ));
    }
  };

  const fillToDay = () => {
    let divs: number[] = [];
    const fillToDay = new Date(
      parseInt(selectedDate.year),
      parseInt(selectedDate.month) - 1,
      1
    ).getDay();

    for (let i = 0; i < fillToDay; i++) {
      divs.push(i);
    }
    return divs.map((no) => (
      <div
        key={no}
        className={`${Styles.emptyFillToDaysDiv} ${emptyFillToDaysDivClassName}`}
      ></div>
    ));
  };

  return (
    <div>
      <div
        className={`${Styles.pickerContainer} ${rootContainerClassName ?? ""}`}
      >
        {/* picker header */}
        <div
          className={`${Styles.picker_header_container} ${
            pickerHeaderContainerClassName ?? ""
          }`}
        >
          <button
            className={`${Styles.btn} ${yearBtnsClassName ?? ""} ${
              yearPrevBtnClassName ?? ""
            }`}
            onClick={getPrevYear}
            aria-label="previous year"
          >
            {yearPrevBtnIcon}
          </button>
          <button
            className={`${Styles.btn} monthBtns monthPrevBtn ${
              monthBtnsClassName ?? ""
            }  ${monthPrevBtnClassName ?? ""}`}
            onClick={getPrevMonth}
            aria-label="previous month"
          >
            {monthPrevBtnIcon}
          </button>
          <div
            className={`${Styles.monthYearContainer} ${
              monthYearContainerClassName ?? ""
            }`}
          >
            <span className={`${Styles.monthText} ${monthTextClassName ?? ""}`}>
              {MONTHS[parseInt(selectedDate.month) - 1]}
            </span>
            <span className={`${Styles.yearText} ${yearTextClassName ?? ""}`}>
              {selectedDate.year}
            </span>
          </div>
          <button
            className={`${Styles.btn}  monthBtns monthNextBtn ${
              monthBtnsClassName ?? ""
            } ${monthNextBtnClassName ?? ""}`}
            onClick={getnextMonth}
            aria-label="next month"
          >
            {monthNextBtnIcon}
          </button>
          <button
            className={`${Styles.btn}  yearBtns yearNextBtn ${
              yearBtnsClassName ?? ""
            } ${yearNextBtnClassName}`}
            onClick={getnextYear}
            aria-label="next year"
          >
            {yearNextBtnIcon}
          </button>
        </div>
        <div
          className={`${Styles.daysContainer} ${daysContainerClassName ?? ""}`}
        >
          {renderWeekDaysHeader()}
          {fillToDay()}

          {monthDays.map((day: Day, index) => {
            const isToday =
              `${selectedDate.year}-${ensureTwoDigits(
                selectedDate.month
              )}-${day?.format("dd")}` === todayFormatted;

            const isSelected =
              `${value.slice(0, 4)}-${value.slice(5, 7)}-${day.format(
                "dd"
              )}` === value;

            return (
              <button
                key={index}
                className={`${Styles.dayBtn} ${
                  isToday ? `${Styles.todayBtn} ${todayBtnClassName}` : ""
                } ${
                  isSelected
                    ? `${Styles.selectedBtn} ${selectedBtnClassName}`
                    : ""
                } ${dayBtnClassName ?? ""} `}
                onClick={() => handleSelectDay(day)}
                aria-label="select day"
              >
                {day.format("dd")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
