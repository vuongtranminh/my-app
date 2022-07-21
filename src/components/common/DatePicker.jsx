import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const DatePicker = (props) => {
    const calendarHeaderYearRef = useRef(null);
    const monthPickerRef = useRef(null);

    const [currentYear, setCurrentYear] = useState('2021');
    const [currentMonth, setCurrentMonth] = useState('February');
    const [days, setDays] = useState([]);
    const [isShowMonths, setIsShowMonths] = useState(false);

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    useEffect(() => {
        const currentDate = new Date();
        setCurrentMonth(currentDate.getMonth());
        setCurrentYear(currentDate.getFullYear());
        generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
    }, []);

    const generateCalendar = (month, year) => {
        const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const currDate = new Date();
        if (!month) month = currDate.getMonth();
        if (!year) year = currDate.getFullYear();

        const currMonth = `${MONTH_NAMES[month]}`;
        setCurrentMonth(currMonth);
        setCurrentYear(year);

        // get first day of month

        const firstDay = new Date(year, month, 1);

        const days = [];

        for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
            let day = {};
            if (i >= firstDay.getDay()) {
                if (
                    i - firstDay.getDay() + 1 === currDate.getDate() &&
                    year === currDate.getFullYear() &&
                    month === currDate.getMonth()
                ) {
                    day = {
                        value: i - firstDay.getDay() + 1,
                        className: 'lt-calendar-day-hover curr-date',
                    };
                } else {
                    day = {
                        value: i - firstDay.getDay() + 1,
                        className: 'lt-calendar-day-hover',
                    };
                }
            } else {
                day = {};
            }
            days.push(day);
        }

        setDays(days);
    };

    const showMonths = () => {
        setIsShowMonths(true);
    };

    const handleChooseMonth = (month) => {
        setIsShowMonths(false);
        generateCalendar(month, currentYear);
    };

    const handleDecreaseYear = () => {
        const prevYear = currentYear - 1;
        setCurrentYear(prevYear);
    };

    const handleIncreaseYear = () => {
        const nextYear = currentYear + 1;
        setCurrentYear(nextYear);
    };

    return (
        <div className="lt-calendar">
            <div className="lt-calendar-header">
                <span className="month-picker" id="month-picker" ref={monthPickerRef} onClick={showMonths}>
                    {currentMonth}
                </span>
                <div className="year-picker">
                    <span className="year-change" id="prev-year" onClick={handleDecreaseYear}>
                        <i className="bx bx-chevron-left"></i>
                    </span>
                    <span id="year" ref={calendarHeaderYearRef}>
                        {currentYear}
                    </span>
                    <span className="year-change" id="next-year" onClick={handleIncreaseYear}>
                        <i className="bx bx-chevron-right"></i>
                    </span>
                </div>
            </div>
            <div className="lt-calendar-body">
                <div className="lt-calendar-week-day">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="lt-calendar-days">
                    {days.map((day) => (
                        <div key={uuidv4()} className={day.className}>
                            {day.value}
                        </div>
                    ))}
                </div>
            </div>
            <div className="lt-calendar-footer">
                <div className="toggle">
                    <span>Dark Mode</span>
                    <div className="dark-mode-switch">
                        <div className="dark-mode-switch-ident"></div>
                    </div>
                </div>
            </div>
            <div className={`month-list ${isShowMonths && 'show'}`}>
                {MONTH_NAMES.map((month, index) => (
                    <div key={uuidv4()}>
                        <div data-month={index} onClick={() => handleChooseMonth(index)}>
                            {month}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

DatePicker.propTypes = {};

export default DatePicker;
