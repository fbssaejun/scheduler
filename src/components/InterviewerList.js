import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {

  const InterviewerArray = props.interviewers.map(person => {
    return <InterviewerListItem
    key={person.id}
    name={person.name}
    selected={person.id === props.value} 
    avatar={person.avatar}
    setInterviewer={event => props.onChange(person.id)}
    />
  })


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {InterviewerArray}
      </ul>
    </section>
  );

}

//Checks if interviewers prop is an array being passed in 
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};