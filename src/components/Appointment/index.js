import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";


export default function Appointment(props) {
  const { time, interview, interviewers, bookInterview, id, onDelete } = props;
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

  const showConfirm = () => {
    transition(CONFIRM)
  }

  const deleteInterview = () => {
    transition(DELETE)
    onDelete(id)
    .then(() => {
      transition(EMPTY)
    })
  }

  return (
    <article className="apoointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} onSave={save} />}
      {mode === SAVING && <Status message ="Saving..."/>}
      {mode === CONFIRM && <Confirm onConfirm={deleteInterview} onCancel={back} message="Are you sure you would like to delete?"/> }
      {mode === DELETE && <Status message="Deleting" />}
      {mode === SHOW && (
        <Show
        student={interview.student}
        interviewer={interviewers.find(interviewer => interviewer.id === interview.interviewer)}
        onDelete={showConfirm}
        />
        )}
    </article>
  );
}
