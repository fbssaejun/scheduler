import { useState, useEffect } from 'react';
import axios from 'axios';
import { getSpotsForDay } from '../helpers/selectors';

export default function useApplicationData(initial) {

  //State variables
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));
  
  //Saves changes(data) to the scheduler API
  function bookInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const updatedSpots = getSpotsForDay(state.days, appointments, state.day)

    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {
      setState({
        ...state,
        appointments,
        days: updatedSpots
      });
    })

  };

  //Deletes schedule from api server and updates state
  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const updatedSpots = getSpotsForDay(state.days, appointments, state.day)

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({
        ...state,
        appointments,
        days: updatedSpots
      })
    })
  };

    //Api requests
    useEffect(() => {
      Promise.all([
        axios.get('/api/days'),
        axios.get('/api/appointments'),
        axios.get('/api/interviewers')
      ])
      .then(all => setState(prev => ({...prev, days: all[0].data, appointments : all[1].data, interviewers: all[2].data})))
    }, [])
    


  return { state, setDay, bookInterview, cancelInterview};

}