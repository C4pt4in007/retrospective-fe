import { useState } from "react";
import submitNewRetrospective from "../functions/SubmitNewRetrospective";
import { useNavigate } from "react-router-dom";

function CreateRetrospective() {
  const [participantNames, setParticipantsName] = useState([]);
  const [inputNameValue, setInputNameValue] = useState("");
  const navigate = useNavigate();
  async function submitHandler(event) {
    event.preventDefault();
    const request = {
      name: event.target.name.value,
      summary: event.target.summary.value,
      date: event.target.date.value,
      participants: participantNames,
    };
    const data = await submitNewRetrospective(request);
    if(data.status === 201)
    {
        navigate("/");
    }
  }
  function addParticipantHandler() {
    setParticipantsName([...participantNames, inputNameValue]);
    setInputNameValue("");
  }
  function inputChangeHandler(event) {
    setInputNameValue(event.target.value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Retrospective Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" />
      </div>
      <div>
        <label>Enter Name of Participant</label>
        <input
          value={inputNameValue}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>
      <div>
        <button type="button" onClick={addParticipantHandler}>
          Add participant
        </button>
      </div>
      <div>
        <button>Create Retrospective</button>
      </div>
    </form>
  );
}
export default CreateRetrospective;
