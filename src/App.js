//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
  <Navbar title="TextUtils" aboutwebsite="About Text Utils"/>
  <div className="container">
  <TextForm your_name="Your Name" enter_text_here="Please write some text"/>
  </div>
  
    </>
  );
}

export default App;
