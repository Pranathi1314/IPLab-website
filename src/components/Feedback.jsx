// FeedbackForm.js
import React, { useState } from 'react';
import ThanksMessage from './ThanksMessage';

function Feedback() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (you can send data to a server, store in state, etc.)
    setSubmitted(true);
  };

  return (
    <div style={{backgroundColor: "lightblue"}}>
        <h1>Feedback form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{textAlign:"center", marginTop: "100px"}}>
            <label>
                Name:
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br /><br></br>
            <label>
                Feedback Review:
                <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                />
            </label>
            <br /><br></br>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <ThanksMessage name={name} />
      )}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Feedback;
