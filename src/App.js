// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const initialFormData = Object.freeze({
    username: "",
    password: ""
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
    // console.log("Nishat");
    console.log(event.target.username.value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form>
          <button type="button">1 PM</button><br></br>
          <button type="button">2 PM</button><br></br>
          <button type="button">3 PM</button><br></br>
          <button type="button">4 PM</button><br></br>
          <button type="button">5 pm</button><br></br>
          <button type="button">6 pm</button><br></br>
          
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" onChange={handleChange}></input><br></br>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lname" onChange={handleChange}></input><br></br>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" onChange={handleChange}></input><br></br>
          <button type="submit" onClick={handleSubmit}>Book!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
