import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";


export default function Appointment(props) {
  const { time, interview, interviewers, bookInterview, id } = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name, 
      interviewer
    }
    transition(SAVING)
    bookInterview(id, interview)
    .then(() => {
      transition(SHOW)
    })
  }
  return (
    <article className="apoointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} onSave={save}/>}
      {mode === SAVING && <Status message ="Saving..."/>}
      {mode === SHOW && (
        <Show
        student={interview.student}
        interviewer={interviewers.find(interviewer => interviewer.id === interview.interviewer)}
        />
        )}
    </article>
  );
}
