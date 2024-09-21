import logo from './logo.svg';
import './App.css';

import Navbar from './travlog_contents/Navbar';
import Explore from './travlog_contents/Explore';
import Advertise from './travlog_contents/advertise';
import Services from './travlog_contents/Services';
import Destination from './travlog_contents/Destination';

function App() {
  return (

    <div className="App">

      <Navbar/>
      <Explore/>
      <Advertise/>
      <Services/>
      <Destination/>
     

     
    </div>
  );
}

export default App;
