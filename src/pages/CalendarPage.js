import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Header from '../components/Header';
import Calendar from "../components/Calendar";
import Schedule from '../components/Schedule';


const CalendarPage = () => {
  const [selectDate, setSelectDate] = useState(dayjs());
  const [scheduleList, setScheduleList] = useState([
    { "date" : "2021-08-30",
    "info" : "일정",
    "userid" : "유저고유id" },

    { "date" : "2021-08-31",
    "info" : "일정",
    "userid" : "유저고유id" }
]);

  const scheduleListToday = () => {
    const scheduleToday = scheduleList.filter(schedule => schedule.date === selectDate.format('YYYY-MM-DD'));
    return scheduleToday;
  }
  /*
  const EventRender = async () => {
    try {
        const response = await axios.get("/api/calendar");
        const success = await response.data.success;
        if(!success) {
          throw new Error(`Http error! status: ${response.status}`);
        }
        success && setEventList(response.calendar_list);
        } catch(error) {
            console.log(error);
        }
  }
*/

  const ScheduleRender = () => {
    axios
      .get("/api/calendar/")
      .then((res) => {
        if(res.data.success) {
          setScheduleList(res.data.calendar_list)
        }
        else {
          console.log(res.data)
          alert(res.data.msg)
        }
      }).catch( res => { console.log(res) } );
  };

  useEffect(() => {
    ScheduleRender();
  },[]);

  return (
    <>
      <Header />
      <Calendar selectDate={selectDate} setSelectDate={setSelectDate} scheduleList={scheduleList}/>
      <ScheduleContainer>
        <ScheduleContainerTitle>{selectDate.format('MM/DD')} Schedule</ScheduleContainerTitle>
        {scheduleListToday().map(schedule => {
          return ( 
            <Link to={{
              pathname: "./modifySchedule",
              state : {
                date:`${selectDate.format('YYYY-MM-DD')}`,
                schedule: `${schedule.info}`
              }
            }} >
            <Schedule date={selectDate.format('MM/DD')} content={schedule.info} id={schedule.userid}/>
          </Link>)
        })}
      </ScheduleContainer>

    </>
  )
}

export default CalendarPage;

const ScheduleContainer = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  max-width: 700px;
  a:link {
    color: #282828;
    text-decoration: none;
  }
`;

const ScheduleContainerTitle = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 1.5rem;
`;

