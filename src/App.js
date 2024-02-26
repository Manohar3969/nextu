import logo from './logo.svg';
import './App.css';
import { Buttons } from './Components/Buttons';
import { ErrorMessage } from './Components/ErrorMessage';
import { Inputs } from './Components/InputText';
import { InputDropDown } from './Components/InputDropDown';

function App() {
  return (
    <div className="App">
      <Buttons></Buttons>
      <ErrorMessage></ErrorMessage>
      <Inputs></Inputs>
      <InputDropDown></InputDropDown>
      
    </div>
  );
}

export default App;
