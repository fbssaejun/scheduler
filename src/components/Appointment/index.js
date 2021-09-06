import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

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
    bookInterview(id, interview)
  }

  return (
    <article className="apoointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} onSave={save}/>}
      {mode === SHOW && (
        <Show
        student={interview.student}
        interviewer={interview.interviewer}
        />
        )}
    </article>
  );
}
