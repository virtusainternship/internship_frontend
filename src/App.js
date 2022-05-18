import './App.css';
import React  from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import DropDownList from './components/DropDownList';
import PersonalInformation from './components/PersonalInformation';
import EducationInformation from './components/EducationInformation';
import GapInformation from './components/GapInformation';
import DocumentUpload from './components/DocumentUpload';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
              <Route path = "/DropDownList" component = {DropDownList}></Route>
              <Route path = "/PersonalInformation" component = {PersonalInformation}></Route>
              <Route path = "/EducationInformation/:id" component = {EducationInformation}></Route>
              <Route path = "/GapInformation/:id" component = {GapInformation}></Route>
              <Route path = "/DocumentUpload" component = {DocumentUpload}></Route>
              
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </>
  );
}

export default App;
