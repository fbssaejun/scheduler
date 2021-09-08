import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { time, interview, interviewers, bookInterview, id, onDelete } = props;
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE, true);
      });
  }

  function deleteInterview() {
    transition(DELETE, true);
    onDelete(id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
      });
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty key={id} onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === CONFIRM && (
        <Confirm
          onConfirm={deleteInterview}
          onCancel={back}
          message="Are you sure you would like to delete?"
        />
      )}
      {mode === DELETE && <Status message="Deleting..." />}
      {mode === EDIT && (
        <Form
          interviewers={interviewers}
          interviewer={interview.interviewer}
          onCancel={back}
          onSave={save}
          name={interview.student}
        />
      )}
      {mode === ERROR_SAVE && <Error message="Cannot save" onClose={back} />}
      {mode === ERROR_DELETE && (
        <Error message="Cannot delete" onClose={back} />
      )}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interviewers.find(
            (interviewer) => interviewer.id === interview.interviewer
          )}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
          key={id}
        />
      )}
    </article>
  );
}
