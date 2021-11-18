import React, { useState } from "react";

function Form(props) {
 
  return (
    <form>
      <input
        type="text" 
        onChange={props.handleFirstNameChange}
        value={props.firstName} />
      <input 
        type="text" 
        onChange={props.handleLastNameChange}
        value={props.lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?
      </label>
      <input 
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
