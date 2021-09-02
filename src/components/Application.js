import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from 'axios';

//Fake data
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Anthony Kim",
      interviewer: {
        id: 3,
        name: "LHL",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];

export default function Application(props) {

  const [currentDay, setCurrentDay] = useState("Monday")
  const [days, setDays] = useState([])

  const AppointmentArray = appointments.map(appointment => {
    return <Appointment key={appointment.id} {...appointment} />
  })

  useEffect(() => {
    axios.get('/api/days')
    .then(res => setDays([...res.data]))
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
      <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu"><DayList days={days} day={currentDay} setDay={setCurrentDay}/></nav>
      <img className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs" />
      </section>
      <section className="schedule">
        {AppointmentArray}
        <Appointment key="last" time="5pm"/>
      </section>
    </main>
  )
}
