// ThanksMessage.js
import React from 'react';

function ThanksMessage(props) {
  return (
    <div style={{backgroundColor: "lightblue"}}>
      <p>Thanks for submitting feedback, {props.name}!</p>
    </div>
  );
}

export default ThanksMessage;
