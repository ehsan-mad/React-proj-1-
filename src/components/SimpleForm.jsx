import React from "react";

const SimpleForm = () => {
  const handleOnSubmit=(event)=>{
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    console.log(name,email)
  }
    return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="enter a name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          placeholder="enter a email"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
