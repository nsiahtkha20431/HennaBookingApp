// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const initialFormData = Object.freeze({
    fname: "",
    lname: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.fname.value);
    console.log(event.target.lname.value);
    console.log(event.target.phone.value);

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form onSubmit={handleSubmit}>
          <button type="button">1 PM</button><br></br>
          <button type="button">2 PM</button><br></br>
          <button type="button">3 PM</button><br></br>
          <button type="button">4 PM</button><br></br>
          <button type="button">5 pm</button><br></br>
          <button type="button">6 pm</button><br></br>
          
          <label>First Name:</label>
          <input type="text" name="fname" onChange={handleChange}></input><br></br>
          <label>Last Name:</label>
          <input type="text" name="lname" onChange={handleChange}></input><br></br>
          <label>Phone Number</label>
          <input type="text" name="phone" onChange={handleChange}></input><br></br>
          <button type="submit">Book!</button>
        </form>
      </header>
    </div>
  );
}

export default App;