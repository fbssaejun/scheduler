export function getAppointmentsForDay(state, day) {
  const findDayName = state.days.find(d => d.name === day);

  if(findDayName === undefined) {
    return [];
  }
  
  return findDayName.appointments.map(appointment => {
     return state.appointments[appointment]
  })

};