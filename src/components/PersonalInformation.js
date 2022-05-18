import React, {useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const PersonalInformation = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [HouseNo,setHouseNo] = useState('')
    const [City,setCity] = useState('')
    const [State,setState] = useState('')
    const [Country,setCountry] = useState('')
    const [MobileNumber,setMobileNumber] = useState('')
    const [PassportNo,setPassportNo] = useState('')
    const [Pincode,setPincode] = useState('')
    const [PANNo,setPANNo] = useState('')
    const [nationality, setNationality] = useState('')
    const [sex, setSex] = useState('')
    

    const [nameErr, setNameErr,] = useState(false)
    const [LastNameErr, setLastNameErr] = useState(false)
    const [CityErr, setCityErr] = useState(false)
    const [StateErr, setStateErr] = useState(false)   
    const [CountryErr, setCountryErr] = useState(false)
    const [PANNoErr, setPANNoErr] = useState(false)
    const [PassportNoErr , setPassportNoErr] = useState(false)

    const {id} = useParams();
    const history = useHistory();
    /* const handleClick =() => */
    /* history.push('/GapInformation'); */
     
    const handleClick = (e) => {
      console.log('on click of submit ' + id);
      e.preventDefault();
      const employee = { firstName, lastName, email, sex, nationality, HouseNo, City, PANNo, Pincode, PassportNo,
      MobileNumber,State, Country }
      if (id) {
          EmployeeService.updateEmployeeDet(id, employee).then((response) => {
              history.push('/GapInformation/' + id)
          }).catch(error => {
              console.log(error)
          })
      } else {
          EmployeeService.createEmployeeDet(employee).then((response) => {
              console.log(response.data.id)
              history.push('/GapInformation/' + response.data.id);
          }).catch(error => {
              console.log(error)
          })
      }
  }
    
    

    // const validTextRegex = new RegExp('/^[a-zA-Z ]*$/');
    var validTextRegex = /^[a-zA-Z\s]*$/;
      
    const validateRegex = (value) => {
        console.log(value);
        if (!validTextRegex.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };
      
     

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">PersonalInformation</h2>
        }
    }

     const validate = (e) => { 
        console.log(e.target.value);
         setFirstName(e.target.value);
               
         if (validateRegex(e.target.value)) { 
             setNameErr(true);
             
         } else { 
             setNameErr(false);
             
             //setFirstName(e.target.value);
         }
          
      }; 

      var validTextRegex1 = /^[a-zA-Z\s]*$/;
      
      const validate1Regex = (value) => {
        console.log(value);
        if (!validTextRegex1.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };

    

      const validate1 = (f) => { 
        console.log(f.target.value);
         
         setLastName(f.target.value);       
         if (validate1Regex(f.target.value)) { 
             
             setLastNameErr(true); 
         } else { 
             
             setLastNameErr(false);
             //setLastName(e.target.value);
         }
          
      }; 

      //new///////////////////City//////////////////////////////
      var validTextRegex2 = /^[a-zA-Z\s]*$/;
      
      const validate2Regex = (value) => {
        console.log(value);
        if (!validTextRegex2.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };

    

      const validate2 = (g) => { 
        console.log(g.target.value);
         
         setCity(g.target.value);       
         if (validate2Regex(g.target.value)) { 
             
             setCityErr(true); 
         } else { 
             
             setCityErr(false);
             //setLastName(e.target.value);
         }
          
      }; 

    ///////////////////////STATE////////////
    var validTextRegex3 = /^[a-zA-Z\s]*$/;
      
      const validate3Regex = (value) => {
        console.log(value);
        if (!validTextRegex3.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };

    

      const validate3 = (h) => { 
        console.log(h.target.value);
         
         setState(h.target.value);       
         if (validate3Regex(h.target.value)) { 
             
             setStateErr(true); 
         } else { 
             
             setStateErr(false);
             //setState(e.target.value);
         }
          
      };
     
    ////////////////////////COUNTRY/////////////////////////
    var validTextRegex4 = /^[a-zA-Z\s]*$/;
      
      const validate4Regex = (value) => {
        console.log(value);
        if (!validTextRegex4.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };

    

      const validate4 = (i) => { 
        console.log(i.target.value);
         
         setCountry(i.target.value);       
         if (validate4Regex(i.target.value)) { 
             
             setCountryErr(true); 
         } else { 
             
             setCountryErr(false);
             //setCountry(e.target.value);
         }
          
      };
      ///////////Pan//////////////////

      var validTextRegex5 = /^[0-9a-zA-Z]*$/;
      
      const validate5Regex = (value) => {
        console.log(value);
        if (!validTextRegex5.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      };

    

      const validate5 = (j) => { 
        console.log(j.target.value);
         
         setPANNo(j.target.value);       
         if (validate5Regex(j.target.value)) { 
             
             setPANNoErr(true); 
         } else { 
             
             setPANNoErr(false);
             //setCountry(e.target.value);
         }
          
      };

      /////////////Passport/////////////
      /* var validTextRegex6 = /^[0-9a-zA-Z]*$/; */
      /*  */
      /* const validate6Regex = (value) => { */
      /*   console.log(value); */
      /*   if (!validTextRegex6.test(value)) { */
      /*       console.log(true); */
      /*     return true; */
      /*   } else { */
      /*       console.log(false); */
      /*     return false; */
      /*   } */
      /*    */
      /* }; */

    

      const validate6 = (k) => { 
        console.log(k.target.value);
         
         setPassportNo(k.target.value);       
         if (validate5Regex(k.target.value)) { 
             
             setPassportNoErr(true); 
         } else { 
             
             setPassportNoErr(false);
             //setCountry(e.target.value);
         }
          
      };

      
      
      
    return (
      
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form onSubmit={(e) => handleClick(e)}> 
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        required
                                       
                                        value = {firstName}
                                        onChange = {(e) => validate(e)}
                                        //  onChange = {(e) => setFirstName(e.target.value)}
                                        >
                                          
                                    </input>
                                    {nameErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                </div>

                                 
                                   <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        required
                                        value = {lastName}
                                         onChange = {(f) => validate1(f)}
                                    >
                                    </input>
                                    {LastNameErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>}
                                
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nationality :</label>
                                    <div class="col-md-3">
                                  
                                 <select name="nationality" 
                                 onChange = {(e) => setNationality(e.target.value)}
                                  class="form-select" id="validationDefault04" required>
                                  <option selected disabled value="">Country</option>
                                   <option>India</option>
                                    <option>USA</option>
                                      <option>UK</option>
                                  </select>
                                  </div> 
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Sex :</label>
                                    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio1" name="sex" onChange={(e) => setSex(e.target.value)} value="option1" checked></input>
      <label class="form-check-label" for="radio1">Male</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio2" name="sex" onChange={(e) => setSex(e.target.value)} value="option2"></input>
      <label class="form-check-label" for="radio2">Female</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio3" name="sex" onChange={(e) => setSex(e.target.value)} value="option3"></input>
      <label class="form-check-label" for="radio2">Others</label>
    </div>
                                     
                                
                                </div>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Marital Status :</label>
                                    <div class="form-check">
      

      <label> <button name='maritalStatus' value={maritalStatus} type="button" class="btn btn-outline-primary">Single</button></label>
       <label> <button name='maritalStatus' value={maritalStatus} type="button" class="btn btn-outline-secondary">Married</button></label>
    </div></div>
    
    <div className = "form-group mb-2">
                                    <label className = "form-label"> Date Of Birth :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>
                                
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <form>
    
    
    <input type="email" name="email" 
    onChange = {(e) => setEmail(e.target.value)}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small></form>
  
                                     
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> House No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "EnterHouse No"
                                        name = "HouseNo"
                                        className = "form-control"
                                        value = {HouseNo}
                                        required
                                        onChange = {(e) => setHouseNo(e.target.value)}
                                    >
                                    </input></div>
                                     
                                    <div className = "form-group mb-2">
                                    <label className = "form-label"> City :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter City"
                                        name = "City"
                                        className = "form-control"
                                        required
                                        value = {City}
                                         onChange = {(g) => validate2(g)}
                                    >
                                    </input>
                                    {CityErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>}
                                
                                </div>
                                
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> State :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter State"
                                        name = "State"
                                        className = "form-control"
                                        required
                                        value = {State}
                                         onChange = {(h) => validate3(h)}
                                    >
                                    </input>
                                    {StateErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>}
                                
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Country :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Country"
                                        name = "Country"
                                        className = "form-control"
                                        required
                                        value = {Country}
                                         onChange = {(i) => validate4(i)}
                                    >
                                    </input>
                                    {CountryErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>}
                                
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Pincode :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Pincode"
                                        name = "Pincode"
                                        className = "form-control"
                                        value = {Pincode}
                                        required
                                        onChange = {(e) => setPincode(e.target.value)}
                                    >
                                    </input>
                                     
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile Number :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Mobile Number"
                                        name = "MobileNumber"
                                        className = "form-control"
                                        value = {MobileNumber}
                                        required
                                        onChange = {(e) => setMobileNumber(e.target.value)}
                                    >
                                    </input>
                                     
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Passport No :</label>
                                    <input
                                        type = "Passport No"
                                        placeholder = "Passport No"
                                        name = "PassportNo"
                                        className = "form-control"
                                        value = {PassportNo}
                                        required
                                        onChange = {(k) => validate6(k)}
                                    >
                                    </input>
                                    {PassportNoErr && <p style={{color: 'red'}}>Only NOs and Text</p>} 
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">PAN No :</label>
                                    <input
                                        type = "PAN No"
                                        placeholder = "PAN No"
                                        name = "PANNo"
                                        className = "form-control"
                                        value = {PANNo}
                                        required
                                        onChange = {(f) => validate5(f)}
                                    >
                                    </input>
                                    {PANNoErr && <p style={{color: 'red'}}>No Space or Special Char allowed</p>}
                                     

                                </div>
                                <button type="submit">Next Page</button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default PersonalInformation;