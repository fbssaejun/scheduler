export function getAppointmentsForDay(state, day) {
  const findDayName = state.days.find(dayList => dayList.name === day);

  return !findDayName ? [] : findDayName.appointments.map(appointment => {
    return state.appointments[appointment]
 })
};

export function getInterview(state, interview) { 
  return !interview ? null :  {...interview,  "interviewer" : state.interviewers[interview.interviewer]};
}
