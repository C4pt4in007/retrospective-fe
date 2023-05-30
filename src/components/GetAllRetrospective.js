import { useEffect, useState } from "react";
import RetrospectiveList from "./RetrospectiveList";
import { useLoaderData } from "react-router-dom";

function GetAllRetrospective() {
  const [retrospectives, setRetrospectives] = useState([]);
  const sortedRetrospectives = retrospectives.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const data = useLoaderData();
  useEffect(() => {
    setRetrospectives(data);
  }, []);
  return <RetrospectiveList items={sortedRetrospectives} />;
}
export default GetAllRetrospective;

export async function loader() {
  const response = await fetch(
    "https://localhost:7266/Retrospective/retrospectives"
  );
  const data = await response.json();
  if (!response.ok) {
    console.log(response);
  } else return data;
}
