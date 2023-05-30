import React from "react";
import AddFeedback from "./AddFeedback";
import styles from "./RetrospectiveList.module.css";
function RetrospectiveList(props) {
  return (
    <div>
      <ul className={styles.list}>
        {props.items.map((retrospective) => {
          let count = 0;
          return (
            <li key={retrospective.name}>
              <div className={styles.cardStyle}>
                <div>
                  <label htmlFor={retrospective.name + "name"}>Name: </label>
                  <span id={retrospective.name + "name"}>
                    "{retrospective.name}"
                  </span>
                </div>
                <div>
                  <label htmlFor={retrospective.name + "summary"}>
                    Summary:{" "}
                  </label>
                  <span id={retrospective.name + "summary"}>
                    "{retrospective.summary}"
                  </span>
                </div>
                <div>
                  <label htmlFor={retrospective.name + "date"}>Date: </label>
                  <span id={retrospective.name + "date"}>
                    {new Date(retrospective.date).toLocaleDateString("en-GB")}
                  </span>
                </div>
                <div>
                  <label htmlFor={retrospective.name + "participants"}>
                    Participants:{" "}
                  </label>
                  <span id={retrospective.name + "participants"}>
                    {retrospective.participants.map((participant, index) => (
                      <React.Fragment key={participant}>
                        "{participant}"
                        {index !== retrospective.participants.length - 1 &&
                          ", "}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                <div>
                  <label>Feedback: </label>
                  {retrospective.feedbackItems.map((item) => (
                    <>
                      <div style={{ marginTop: "10px" }}>
                        <span>Item: {(count = count + 1)}</span>
                      </div>
                      <div>
                        <label htmlFor={retrospective.name + item.name}>
                          Name:{" "}
                        </label>
                        <span id={retrospective.name + item.name}>
                          "{item.name}"
                        </span>
                      </div>
                      <div>
                        <label>Body: </label>
                        <span>"{item.summary}"</span>
                      </div>
                      <div>
                        <label>FeedbackType: </label>
                        <span>
                          {item.feedback === 0 && '"positive"'}
                          {item.feedback === 1 && '"negative"'}
                          {item.feedback === 2 && '"idea"'}
                          {item.feedback === 3 && '"praise"'}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <AddFeedback id={retrospective.name} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default RetrospectiveList;
