import { useState } from "react";
import RetrospectiveList from "./RetrospectiveList";

function GetRetrospectiveByDate() {
  const [retrospectives, setRetrospectives] = useState([]);
  const maxdate = new Date().toISOString().split("T")[0];
  async function submitHandler(event) {
    event.preventDefault();
    const [year, month, day] = event.target.date.value.split("-");
    const formattedDate = `${day}%2F${month}%2F${year}`;
    const response = await fetch(
      "https://localhost:7266/Retrospective/retrospective?date=" + formattedDate
    );
    const data = await response.json();
    if (!response.ok) {
      console.log(response);
    } else setRetrospectives(data);
  }
  return (
    <>
      <form data-testid="retro-form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" max={maxdate} />
        </div>
        <div>
          <button>Get Retrospectives</button>
        </div>
      </form>
      <div>
        <RetrospectiveList items={retrospectives} />
      </div>
    </>
  );
}
export default GetRetrospectiveByDate;
