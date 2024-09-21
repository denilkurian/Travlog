import logo from './logo.svg';
import './App.css';

import Navbar from './travlog_contents/Navbar';
import Explore from './travlog_contents/Explore';
import Advertise from './travlog_contents/advertise';


function App() {
  return (

    <div className="App">

      <Navbar/>
      <Explore/>
      <Advertise/>
     

     
    </div>
  );
}

export default App;
