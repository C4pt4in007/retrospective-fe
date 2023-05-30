import feedbackSubmitHandler from "../functions/SubmitFeedback";
function AddFeedback(props) {
  function submitHandler(event) {
    feedbackSubmitHandler(event, props.id);
  }
  return (
    <form id={props.id} onSubmit={submitHandler}>
      <div>
        <label htmlFor={props.id + "feedbackname"}>Enter Your Name</label>
        <input id={props.id + "feedbackname"} type="text" />
      </div>
      <div>
        <label htmlFor={props.id + "body"}>Body</label>
        <textarea id={props.id + "body"} />
      </div>
      <div>
        <label htmlFor={props.id + "feedback_positive"}>positive</label>
        <input
          id={props.id + "feedback_positive"}
          value={0}
          name="feedback_radio"
          type="radio"
        />
        <label htmlFor={props.id + "feedback_negative"}>negative</label>
        <input
          id={props.id + "feedback_negative"}
          value={1}
          name="feedback_radio"
          type="radio"
        />
        <label htmlFor={props.id + "feedback_idea"}>idea</label>
        <input
          id={props.id + "feedback_idea"}
          value={2}
          name="feedback_radio"
          type="radio"
        />
        <label htmlFor={props.id + "feedback_praise"}>praise</label>
        <input
          id={props.id + "feedback_praise"}
          value={3}
          name="feedback_radio"
          type="radio"
        />
      </div>
      <div>
        <button id={props.id + "Submit"} type="submit">
          Submit Feedback
        </button>
      </div>
    </form>
  );
}
export default AddFeedback;
