// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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

  const choices = ['Bridal', 'Party', 'Bridal with party'];
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form onSubmit={handleSubmit}>
          <ButtonGroup size="large" aria-label="outlined primary button group" color="secondary" variant="text">
            <Button type="button" variant="outlined" color="secondary">1 PM</Button>
            <Button type="button" variant="outlined" color="secondary">2 PM</Button>
            <Button type="button" variant="outlined" color="secondary">3 PM</Button>
            <Button type="button" variant="outlined" color="secondary">4 PM</Button>
            <Button type="button" variant="outlined" color="secondary">5 PM</Button>
            <Button type="button" variant="outlined" color="secondary">6 PM</Button>
          </ButtonGroup>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={choices}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Booking Type" />}
          />

          <br></br><label>First Name: </label>
          <input type="text" name="fname" onChange={handleChange}></input><br></br>
          <label>Last Name: </label>
          <input type="text" name="lname" onChange={handleChange}></input><br></br>
          <label>Phone Number: </label>
          <input type="text" name="phone" onChange={handleChange}></input><br></br>
          <Button variant="contained" color="secondary">Book!</Button>
        </form>
      </header>
    </div>
  );
}

export default App;