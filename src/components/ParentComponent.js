import React, { useState } from "react";
import Form from "./Form"

function ParentComponent(){
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event){
    setNewsletter(event.target.checked);
  }

  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event){
    setLastName(event.target.value);
}

  return(
    <Form
    firstName={firstName}
    lastName={lastName}
    newsletter={newsletter}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
    handleNewsletterChange={handleNewsletterChange}
    />
  );
}

export default ParentComponent;