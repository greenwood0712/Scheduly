import React, { Children } from "react";
import "../styles/subjectlistitem.scss";

function SubjectListItem(props) {
  const handleRemoveSubject = () => {
    //Calling the handler function passed through the props
    props.remove(props.subjectCode);
  };

  return (
    <div className="subject">
      <p className="subject__details">
        {props.subjectCode}-{props.subjectName} | Credit Hours:{" "}
        {props.creditHours} | Contact Hours: {props.contactHours} | Labs:{" "}
        {props.labs}
      </p>
      <button
        onClick={handleRemoveSubject}
        className="subject__btn subject__btn--remove"
      >
        Remove
      </button>
    </div>
  );
}

export default SubjectListItem;