// import logo from './logo.svg';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.fname.value) // from elements property
    console.log(event.target.fname.value)          // or directly
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form>
          <button type="button">1 PM</button><br></br>
          <button type="button">2 PM</button><br></br>
          <button type="button">3 PM</button><br></br>
          <button type="button">4 PM</button><br></br>
          <button type="button">5 pm</button><br></br>
          <button type="button">6 pm</button><br></br>
          
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname"></input><br></br>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname"></input><br></br>
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone"></input><br></br>
          <button type="button" onClick= {handleSubmit}>Book!</button>
        </form>
      </header>
    </div>
  );
}



export default App;
