export function getAppointmentsForDay(state, day) {
  const findDayName = state.days.find(dayList => dayList.name === day);

  return !findDayName ? [] : findDayName.appointments.map(appointment => {
    return state.appointments[appointment]
 })
};

export function getInterview(state, interview) { 
  return !interview ? null :  {...interview,  "interviewer" : state.interviewers[interview.interviewer]};
}

export function getInterviewersForDay(state, day) {
  const findDayName = state.days.find(dayList => dayList.name === day);
  return !findDayName ? [] : findDayName.interviewers.map(interviewer => {
    return state.interviewers[interviewer]
  })
};

export function getSpotsForDay(days, appointments, dayName) {
  const findDayName = days.find(dayList => dayList.name === dayName);
  const reaminingSpots = findDayName.appointments.filter(appointment => appointments[appointment].interview === null).length;
  return days.map(day => day.name === dayName ? {...day, spots: reaminingSpots} : day);
}

