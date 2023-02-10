// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function App() { //function for the whole app
  const initialFormData = Object.freeze({
    fname: "",
    lname: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData); // what does this do?

  const handleChange = (e) => { //function called when "BOOK!" button is clicked
    updateFormData({ 
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
    
  const handleSubmit = (event) => { //function called when "BOOK!" button is clicked; prints the form info submitted
    event.preventDefault();

    fetch('http://localhost:3001/', { //fetch is used to request data from the server...
      method: 'POST', // ...arguments are: URL, method, body, header) 
      body: JSON.stringify({firstName: event.target.fname.value,
        lastName: event.target.lname.value,
        phone: event.target.phone.value}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));  
  }

  const choices = ['Bridal', 'Wedding party', 'Bridal with wedding party', 'Birthday', 'Eid', 'Other event']; //variable for the dropdown options
  const numOfPeople = ['1', '2', '3', '4', '5', '6']; //variable for the dropdown options
  

  return (
    <div className="App">
      <header className="App-header">
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form onSubmit={handleSubmit}>

          <br></br><label>First Name: </label>
          <input type="text" name="fname" onChange={handleChange}></input><br></br>
          <label>Last Name: </label>
          <input type="text" name="lname" onChange={handleChange}></input><br></br>
          <label>Phone Number: </label>
          <input type="text" name="phone" onChange={handleChange}></input><br></br>
          <br></br>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={choices}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Booking Type" />}
          /> <br></br>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={numOfPeople}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Total number of people" />}
          /> <br></br>

          <ButtonGroup size="large" aria-label="outlined primary button group" color="secondary" variant="text">
            <Button type="button" variant="outlined" color="secondary">1 PM</Button>
            <Button type="button" variant="outlined" color="secondary">2 PM</Button>
            <Button type="button" variant="outlined" color="secondary">3 PM</Button>
            <Button type="button" variant="outlined" color="secondary">4 PM</Button>
            <Button type="button" variant="outlined" color="secondary">5 PM</Button>
            <Button type="button" variant="outlined" color="secondary">6 PM</Button>
          </ButtonGroup> <br></br><br></br>

          <Button type="submit" variant="contained" color="secondary">Book!</Button>
        </form>
      </header>
    </div>
  );
}

export default App;