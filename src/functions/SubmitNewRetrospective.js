async function submitNewRetrospective(request) {
  const response = await fetch("https://localhost:7266/Retrospective/create", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response;
  if (!response.ok) {
    console.log(response);
  } else {
    return data;
  }
}

export default submitNewRetrospective;
