import logo from './logo.svg';
import './App.css';
import Resume from './class-comp/Resume';
import Button from './class-comp/Button';
// import Parent from './class-comp/Parent';
import ParentTheme from './class-comp/ParentTheme';
import LifeCycle from './class-comp/LifeCycle';
import User from './functional-comp/User';
import UseStateHookDemo from './functional-comp/Hooks/UseStateHookDemo';
import UseEffectHookDemo from './functional-comp/Hooks/UseEffectHookDemo';
import Employees from './functional-comp/Hooks/Employees';
import UseReducerHookDemo from './functional-comp/Hooks/UseReducerHookDemo';
import Home from './functional-comp/Hooks/UseConTextHookDemo';
import { createContext, useState } from 'react';
// import Resume2 from "./functional-comp/Resume"

import Parent from "./functional-comp/Hooks/Parent"
import UseMemoDemoHook from './functional-comp/Hooks/UseMemoDemo';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Employee from './Pages/Employee';
import ProductsList from './Pages/Products';
import Header from './Pages/Header';
import AddCourse from './Pages/course/AddCourse';
import EmployeeList from './Pages/EmployeeList';
import Task from './Pages/Task';
import EventHandler from './functional-comp/Hooks/EventHandler';
import UseRefHookDemo from './functional-comp/Hooks/UseRefHookDemo';
import ForwardParent from './functional-comp/Hooks/ForwardRefDemo';
import ParentForm from './functional-comp/Hooks/ParentForm';
import UsersWithAxios from './functional-comp/Hooks/UsersWithAxios';
import RouterHooksDemo from './functional-comp/Hooks/RouterHooksDemo';
import AutoCompleteAddress from './functional-comp/AutoCompleteAddress';

export const AgeContext = createContext()



function App() {
  // const [age,setAge] = useState(60)
  return (
    <div className="App">

      {/* <Resume/> */}
      {/* <Resume2/> */}
      {/* <Button label="Login" color="blue"/>
      <Button label="Signup" color="orange"/>
      <Button label="Paynow" color="red"/> */}
      {/* <Parent/> */}
      {/* <ParentTheme/> */}
      {/* <LifeCycle age="20"/> */}

      {/* <User/> */}
      {/* <UseStateHookDemo/> */}
      {/* <UseEffectHookDemo/> */}
      {/* <Employees/> */}
      {/* <UseReducerHookDemo/> */}
      {/* <AgeContext.Provider value={age}>
        <Home/>
      </AgeContext.Provider> */}

    {/* <Parent/> */}

    {/* <UseMemoDemoHook/> */}
    <BrowserRouter>
       <Header/>

    <Routes>
      <Route path="employee" element={<Employee/>}>
        <Route path="/employee/list" element={<EmployeeList/>}></Route>
      </Route>
      <Route path="addcourse" element={<AddCourse/>}></Route>
      <Route path="tasks" element={<Task/>}></Route>
      <Route path="eventhandler" element={<EventHandler/>}></Route>
      <Route path="userefhook" element={<UseRefHookDemo/>}></Route>
      <Route path="products/:id" element={<ProductsList/>}></Route>
      <Route path="forwardref" element={<ForwardParent/>}></Route>
      <Route path="forwardref2" element={<ParentForm/>}></Route>
      {/* <Route path="axiosdemo" element={<UsersWithAxios/>}></Route> */}
      <Route path="routerhooks/:id/:age" element={<RouterHooksDemo/>}></Route>
      <Route path="useEffect" element={<UseEffectHookDemo/>}></Route>
      <Route path="autocomplete" element={<AutoCompleteAddress/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
