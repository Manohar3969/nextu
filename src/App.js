import logo from './logo.svg';
import './App.css';
import { Buttons } from './Components/Buttons';
import { ErrorMessage } from './Components/ErrorMessage';
import { Inputs } from './Components/InputText';
import { InputDropDown } from './Components/InputDropDown';
import { Headings } from './Components/Headings';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
