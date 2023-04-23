import React from 'react'

const SessionPlan = () => {
  return (
    <div className="session-plan-wrapper">
      <div className="session-plan-container">
        <h2>Session Plan</h2>
        {/* <br /> */}
        <p> Live session is about to start. Please stay tuned</p>
        {/* <br /> */}
        <button className='join-btn'>JOIN LIVE SESSION</button>
        <br />
        <br />
        <p>
          <b>Sub-Topics</b>
        </p>
        <p>1. Sorting and Indexing Dataframe</p>
        <p>2. Filtering Dataframe</p>
        <p>3. Usage of loc and iloc functions</p>
        <br />
        <p>
          <b>Session Details</b>
        </p>
      </div>
    </div>
  );
}

export default SessionPlan