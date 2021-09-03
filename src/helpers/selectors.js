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