import logo from './logo.svg';
import './App.css';
import Resume from './class-comp/Resume';
import Button from './class-comp/Button';
import Parent from './class-comp/Parent';
import ParentTheme from './class-comp/ParentTheme';
import LifeCycle from './class-comp/LifeCycle';
// import Resume2 from "./functional-comp/Resume"

function App() {
  return (
    <div className="App">
      {/* <Resume/> */}
      {/* <Resume2/> */}
      {/* <Button label="Login" color="blue"/>
      <Button label="Signup" color="orange"/>
      <Button label="Paynow" color="red"/> */}
      {/* <Parent/> */}
      {/* <ParentTheme/> */}
      <LifeCycle age="20"/>
    </div>
  );
}

export default App;
