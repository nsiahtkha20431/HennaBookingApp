// import logo from './logo.svg';
import './App.css';
import React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function App() { //function for the whole app
  const initialFormData = Object.freeze({
    fname: "",
    lname: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData); // what does this do?
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (e) => { //function called when "BOOK!" button is clicked
    setValue(e);
    
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
        email: event.target.email.value,
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
        <p>Welcome to <a target="blank" href="https://www.instagram.com/nishathennaottawa/"> @nishathennaottawa</a>'s' henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form onSubmit={handleSubmit}>

          {/* <br></br><label>First Name: </label>
          <input type="text" name="fname" onChange={handleChange}></input><br></br>
          <label>Last Name: </label>
          <input type="text" name="lname" onChange={handleChange}></input><br></br>
          <label>Email: </label>
          <input type="text" name="email" onChange={handleChange}></input><br></br>
          <label>Phone Number: </label>
          <input type="text" name="phone" onChange={handleChange}></input><br></br>
          <br></br> */}
          <TextField id="fname" label="First Name" variant="outlined" />
          <TextField id="lname" label="Last Name" variant="outlined" />
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="phone" label="Phone" variant="outlined" /> <br></br><br></br>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Booking date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              /><br></br>
            </Stack>
          </LocalizationProvider>

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
          <Button type="submit" variant="contained" color="secondary">Book!</Button>
        </form>
      </header>
    </div>
  );
}

export default App;