import React, { useState } from "react";

const SimpleForm = () => {

  const [formdata, setFormdata]=useState({
    name:"",
    email:""});
    const [tableData, setTableData]=useState([]);
  const handleOnSubmit=(event)=>{
    event.preventDefault()
   setTableData([...tableData,formdata]);
    //console.log("form values",formdata);
  }
  const handleOnChange=(event)=>{
    const {name,value}=event.target;
    setFormdata((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  };
    return (
      <>
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="enter a name"
          onChange={handleOnChange}
          value={formdata.name}
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
          onChange={handleOnChange}
          value={formdata.email}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <table style={{width:"100%"
    ,border:"1px solid black"
    
    ,textAlign :"center"
    ,marginTop:"10px"
    ,backgroundColor:"lightblue"


    }}>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {tableData.map((data,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>

        ))}
      </tbody>
    </table>
   </>
  );
};

export default SimpleForm;
