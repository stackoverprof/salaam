import React from 'react'

const Form = props => (
  <div>
    <form onSubmit={props.getSchedule}>
      <input type="date" name="date" placeholder="Country..." />
      <button className="btn btn-danger"type="submit">Get Schedule</button>
    </form>
  </div>
);

export default Form;
