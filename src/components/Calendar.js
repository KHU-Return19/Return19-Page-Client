import React, { useState } from "react";
import styled from "styled-components";
import previous from '../assets/icons/previous_arrow.svg';
import next from '../assets/icons/next_arrow.svg';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

// constants
const WEEKS_OF_YEAR = 52;
const IF_WEEK_GOES_NEXTYEAR = 1;

// dayjs extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);


const Calendar = () => {

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week();
    const lastWeek = viewDate.endOf('month').week() === IF_WEEK_GOES_NEXTYEAR ? WEEKS_OF_YEAR + 1 : viewDate.endOf('month').week();
    let calender = [];


    for (let week = startWeek; week <= lastWeek; week++) {
      calender.push(
        <div className="row" key={week}>
          {Array(7).fill(0).map((n, i) => {
            let current = viewDate.startOf('week').week(week).add(n + i, 'day');
            if (viewDate.format('MM') === '12') {
              current = viewDate.startOf('week').week(week - WEEKS_OF_YEAR).add(n + i, 'day');
            }
            // 현재 날짜 (기준)
            let isSelected = selectDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
            let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
            let isNone = current.format('MM') === viewDate.format('MM') ? '' : 'none';
            return (
              <>
                <div className={`box`} key={`${week}_${i}`} >
                  <div className={`text ${isSelected} ${isToday} ${isNone}`} onClick={() => setSelectDate(current)}>
                    <span className={`day`}>{current.format('D')}</span>
                    {isToday ? (<span className="isToday">Today</span>)
                      : isSelected ? (<span className="isSelected"></span>) : null}
                  </div>
                </div >
              </>
            )
          })
          }
        </div >
      )
    }
    return calender;
  }

  const changeMonth = (date, changeString) => {
    switch (changeString) {
      case 'add':
        return setViewDate(viewDate.add(1, 'month'))
      case 'subtract':
        return setViewDate(viewDate.subtract(1, 'month'))
      default:
        return date;
    }
  }


  return (
    <>
      <StyledCalendarHeader>
        <button className='previous_btn' onClick={() => changeMonth(viewDate, 'subtract')}></button>
        <span className="thisMonth">{viewDate.format("YY")}년{viewDate.format("MM")}월</span>
        <button className='next_btn' onClick={() => changeMonth(viewDate, 'add')}></button>
      </StyledCalendarHeader>
      <StyledCalendarBody>
        <div className="row week">
          <div className="box"><span className="text">SUN</span></div>
          <div className="box"><span className="text">MON</span></div>
          <div className="box"><span className="text">TUE</span></div>
          <div className="box"><span className="text">WED</span></div>
          <div className="box"><span className="text">THU</span></div>
          <div className="box"><span className="text">FRI</span></div>
          <div className="box"><span className="text">SAT</span></div>
        </div>
        <div>
          {createCalendar()}
        </div>
      </StyledCalendarBody>
    </>
  )
}

export default Calendar;


const StyledCalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
  .thisMonth{
    font-weight: 700;
    color: #292929;
    line-height: 24px;
  }
  button{
    width: 24px;
    margin: 0 8px;
    border: none;
  }
  .previous_btn{
    width: 24px;
    height: 24px;   
    background: url(${previous}) center  no-repeat;
  }
  .next_btn{
    width: 24px;
    height: 24px;
    background: url(${next}) center no-repeat;
  }
`;

const StyledCalendarBody = styled.div`
  text-align: center;
  margin: 20px;
  .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
  .row.week{
    height: 18px;
    border-bottom: 1px solid #E8E8E8;
  }
  .box{
    width: 32px;
    height: 32px;
    margin: 6px 6px;
    font-size: 14px;
  }
  .text{
    position: static;
    width: 32px;
    height: 32px;
    color: #292929;
  }
  .holiday,
  .grayed{
    color: #484848;
    pointer-events: none;
  }
  .day{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
  .selected{
    width: 32px;
    height: 32px;
    border-radius: 50%;
background : lightgrey;
    font-weight: 700;
    color: #fff;
  }
  .today{
    border-radius: 50%;
    font-weight: 500;
    background : grey;
  }
  .isSelected{
    position: relative;
    color: ligtgrey;
    font-size: 10px;
    font-weight: 400;
  }
  .isToday{
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }
  .none{
    display: none;
  }
`;