// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import ImageUpload from "./ImageUpload"; //use this later to update the image upload: https://codesandbox.io/s/vj1q68zm25?file=/src/index.js:61-101
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function App() { //function for the whole app
  const initialFormData = Object.freeze({
    fname: "",
    lname: ""
  });

  //all the little consts and variables neeeded 
  const [formData, updateFormData] = React.useState(initialFormData); 
  const [value, setValue] = React.useState(dayjs());
  const choices = ['Bridal', 'Wedding party', 'Bridal with wedding party', 'Birthday', 'Eid', 'Other event']; //variable for the dropdown options
  const numOfPeople = ['1', '2', '3', '4', '5', '6','7', '8', '9', '10+']; //variable for the dropdown options
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
    
  const handleSubmit = (event) => { //function called when BOOK button is clicked; prints the form info submitted
    event.preventDefault();
    // const id = Math.random().toString;

    //is this needed??????????????
    // const theFormData = new FormData();
    // theFormData.append('firstName', event.target.fname.value);
    // theFormData.append('lastName', event.target.lname.value);
    // theFormData.append('email', event.target.email.value);
    // theFormData.append('phone', event.target.phone.value);
    // if (imageFile) {
    //   theFormData.append('image', imageFile);
    // }

    fetch('http://localhost:3001/details', { //fetch is used to request data from the server...
      method: 'POST', // ...arguments are: URL, method, body, header) 
      body: 
      // theFormData,
        JSON.stringify({firstName: event.target.fname.value,
          lastName: event.target.lname.value,
          email: event.target.email.value,
          phone: event.target.phone.value}),
        headers: {
          'Content-Type': 'application/json' //need this to log output on server
        }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));  
  }

  const handleChange = (e) => { //function called when BOOK button is clicked
    setValue(e);
    
    updateFormData({ 
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to <a target="blank" href="https://www.instagram.com/nishathennaottawa/"> @nishathennaottawa</a>'s' henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form onSubmit={handleSubmit}>

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
              />
              <br></br>
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

          <input type="file" //image upload
            onChange={handleImageUpload} 
          /> 

          <Button type="submit" variant="contained" color="secondary">Book!</Button>
        </form>
      </header>
    </div>
  );
}

export default App;