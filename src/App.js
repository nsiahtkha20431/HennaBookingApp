import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Nishat. Welcome to my henna booking form!</p>
        <p>Please complete the following details to create your booking: </p>
        <form>
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname"></input><br></br>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname"></input><br></br>
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone"></input><br></br>
          <button type="button" onclick="alert('Hello world!')">Click Me!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
