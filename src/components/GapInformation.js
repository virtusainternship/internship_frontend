import React, {useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'



const GapInformation = () => {

  const [gapInformation, setGapInformation] = useState('')

  const [GapInformationErr, setGapInformationErr,] = useState(false)
  const {id} = useParams();
  const history = useHistory();
    // const handleClick =() =>
    // history.push('/EducationInformation');

    ///try back button
    const prevhistory = useHistory();
    const handleprevClick =() =>
    prevhistory.push('/PersonalInformation');

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
    
    const handleClick = (e) => {
        console.log('inside gap info on submit '+ id);
        e.preventDefault();
        const employee = { gapInformation }
        if (id) {
            EmployeeService.updateEmployeeDet(id, employee).then((response) => {
                history.push('/EducationInformation/' + id)
            }).catch(error => {
                console.log(error)
            })
        } else {
            console.log('inside else');
        }
         }

  const title = () => {

      if(id){
          return <h2 className = "text-center">Update Employee</h2>
      }else{
          return <h2 className = "text-center">GapInformation</h2>
      }
  }

   const validate = (e) => { 
      console.log(e.target.value);
       setGapInformation(e.target.value);
             
       if (validateRegex(e.target.value)) { 
           setGapInformationErr(true);
           
       } else { 
           setGapInformationErr(false);
           
           //setGapReason(e.target.value);
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
                        <div className = "card-body"></div>
  
      
    <form> 
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> GapReason :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Gap Reason"
                                        name = "GapReason"
                                        className = "form-control"
                                        required
                                       
                                        value = {gapInformation}
                                        onChange = {(e) => validate(e)}
                                        
                                        >
                                          
                                    </input>
                                    {GapInformationErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                </div></form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Gap From :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="Gap From">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Gap" placeholder="gap From" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>

<div className = "form-group mb-2">
                                    <label className = "form-label"> Gap To :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="Gap To">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Gap" placeholder="gap To" />
                        </Form.Group>
                    </div>
                    <button type="button" onClick={handleClick}>Next Page</button>
                    <button type="button" onClick={handleprevClick}>Previous Page</button>
                    
                </div>
                
            </div>
</div>
                  
      
    </div></div></div></div>

);
}

export default GapInformation;