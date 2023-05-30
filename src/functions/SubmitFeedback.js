async function feedbackSubmitHandler(event, id) {
    event.preventDefault();
    const url = `https://localhost:7266/Retrospective/retrospective/${id}/feedback`;
    const request = {
      name: event.target[id + "feedbackname"].value,
      summary: event.target[id + "body"].value,
      feedback: parseInt(event.target.feedback_radio.value),
    };
    console.log(JSON.stringify(request));
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response;
    if (!response.ok) {
      console.log(response);
    } else if (data.status === 200) {
      window.location.reload();
    } else {
      console.log(response);
    }
  }

  export default feedbackSubmitHandler;