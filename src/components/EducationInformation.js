import React, {useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const EducationInformation = () => {

    
    const [Course , setCourse ] = useState('')
    const [Program, setProgram] = useState('')
    const [CollegeNameandAddress,setCollegeNameandAddress] = useState('')
    const [UniversityNameandAddress,setUniversityNameandAddress] = useState('')
    const [DurationFrom,setDurationFrom] = useState('')
    const [DurationTo,setDurationTo] = useState('')
    const [Percentage,setPercentage] = useState('')
    const [GraduationDate,setGraduationDate] = useState('')
    const [XCourse , setXCourse ] = useState('')
    const [XProgram, setXProgram] = useState('')
    const [XCollegeNameandAddress,setXCollegeNameandAddress] = useState('')
    const [XUniversityNameandAddress,setXUniversityNameandAddress] = useState('')
    const [XDurationFrom,setXDurationFrom] = useState('')
    const [XDurationTo,setXDurationTo] = useState('')
    const [XPercentage,setXPercentage] = useState('')
    //const [XGraduationDate,setXGraduationDate] = useState('')
    

   
    const [CourseErr, setCourseErr] = useState(false)
    const [ProgramErr, setProgramErr] = useState(false)
    const [CollegeNameandAddressErr,setCollegeNameandAddressErr] = useState('')
    const [UniversityNameandAddressErr,setUniversityNameandAddressErr] = useState('')
    const [DurationFromErr,setDurationFromErr] = useState('')
    const [DurationToErr,setDurationToErr] = useState('')
    const [PercentageErr,setPercentageErr] = useState('')
    const [GraduationDateErr,setGraduationDateErr] = useState('')
    ///////////////////new
    const [XCourseErr, setXCourseErr] = useState(false)
    const [XProgramErr, setXProgramErr] = useState(false)
    const [XCollegeNameandAddressErr,setXCollegeNameandAddressErr] = useState('')
    const [XUniversityNameandAddressErr,setXUniversityNameandAddressErr] = useState('')
    const [XDurationFromErr,setXDurationFromErr] = useState('')
    const [XDurationToErr,setXDurationToErr] = useState('')
    const [XPercentageErr,setXPercentageErr] = useState('')
    //const [XraduationDateErr,setXGraduationDateErr] = useState('')
    
    const {id} = useParams();
    const history = useHistory();
   // const handleClick =() =>
   // history.push('/DocumentUpload');

    const prevhistory = useHistory();
    const handleprevClick =() =>
    prevhistory.push('/GapInformation');
    
    const handleClick = (e) => {
        console.log('inside education info on submit'+ id);
        e.preventDefault();
        const employee = { Course,Program,CollegeNameandAddress,UniversityNameandAddress,
            Percentage, XCourse,XProgram,XCollegeNameandAddress,XPercentage}
        if (id) {
            EmployeeService.updateEmployeeDet(id, employee).then((response) => {
                history.push('/DocumentUpload/' + id)
            }).catch(error => {
                console.log(error)
            })
        } else {
            console.log('inside else');
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
        
      }
      var validTextRegex1 = /^[a-zA-Z\s]*$/;
      const validate1Regex = (value) => {
        console.log(value);
        if (!validTextRegex1.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }}
        var validTextRegex2 = /^[0-9a-zA-Z, ]+$/;
      const validate2Regex = (value) => {
        console.log(value);
        if (!validTextRegex2.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }}
        var validTextRegex3 = /^[0-9a-zA-Z, ]+$/;
        const validate3Regex = (value) => {
            console.log(value);
            if (!validTextRegex3.test(value)) {
                console.log(true);
              return true;
            } else {
                console.log(false);
              return false;
            }}
            var validTextRegex4 = /^[0-9/-]+$/;
            const validate4Regex = (value) => {
                console.log(value);
                if (!validTextRegex4.test(value)) {
                    console.log(true);
                  return true;

                } else {
                    console.log(false);
                  return false;
                }}
                var validTextRegex5 = /^[0-9/-]+$/;
                const validate5Regex = (value) => {
                    console.log(value);
                    if (!validTextRegex5.test(value)) {
                        console.log(true);
                      return true;
                    } else {
                        console.log(false);
                      return false;
                    }}
                    var validTextRegex6 = /^[0-9%.]*$/;
                    const validate6Regex = (value) => {
                        console.log(value);
                        if (!validTextRegex6.test(value)) {
                            console.log(true);
                          return true;
                        } else {
                            console.log(false);
                          return false;
                        }}
                        var validText7Regex = /^[0-9/-]+$/;
                        const validate7Regex = (value) => {
                            console.log(value);
                            if (!validText7Regex.test(value)) {
                                console.log(true);
                              return true;
                            } else {
                                console.log(false);
                              return false;
                            }}
                            
    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Education Information</h2>
        }
    }

     const validate = (e) => { 
        console.log(e.target.value);
         setCourse(e.target.value);        
         if (validateRegex(e.target.value)) { 
             setCourseErr(true); 
         } else { 
             setCourseErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate1 = (f) => { 
        console.log(f.target.value);
         setProgram(f.target.value);        
         if (validate1Regex(f.target.value)) { 
             setProgramErr(true); 
         } else { 
             setProgramErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate2 = (g) => { 
        console.log(g.target.value);
         setCollegeNameandAddress(g.target.value);        
         if (validate2Regex(g.target.value)) { 
             setCollegeNameandAddressErr(true); 
         } else { 
             setCollegeNameandAddressErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate3= (h) => { 
        console.log(h.target.value);
         setUniversityNameandAddress(h.target.value);        
         if (validate3Regex(h.target.value)) { 
             setUniversityNameandAddressErr(true); 
         } else { 
             setUniversityNameandAddressErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate4= (i) => { 
        console.log(i.target.value);
         setDurationFrom(i.target.value);        
         if (validate4Regex(i.target.value)) { 
          setDurationFromErr(true); 
         } else { 
             setDurationFromErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate5= (j) => { 
        console.log(j.target.value);
         setDurationTo(j.target.value);        
         if (validate5Regex(j.target.value)) { 
             setDurationToErr(true); 
         } else { 
             setDurationToErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate6= (k) => { 
        console.log(k.target.value);
         setPercentage(k.target.value);        
         if (validate6Regex(k.target.value)) { 
             setPercentageErr(true); 
         } else { 
             setPercentageErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate7= (l) => { 
        console.log(l.target.value);
         setGraduationDate(l.target.value);        
         if (validate7Regex(l.target.value)) { 
             setGraduationDateErr(true); 
         } else { 
             setGraduationDateErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 

      ////////////////////////////////////nEW reGEX
      var validTextRegex8 = /^[a-zA-Z\s]*$/;
      
    const validate8Regex = (value) => {
        console.log(value);
        if (!validTextRegex8.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }
        
      }
      var validTextRegex9 = /^[a-zA-Z\s]*$/;
      const validate9Regex = (value) => {
        console.log(value);
        if (!validTextRegex9.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }}
        var validTextRegex10 = /^[0-9a-zA-Z, ]+$/;
      const validate10Regex = (value) => {
        console.log(value);
        if (!validTextRegex10.test(value)) {
            console.log(true);
          return true;
        } else {
            console.log(false);
          return false;
        }}
        var validTextRegex11 = /^[0-9a-zA-Z, ]+$/;
        const validate11Regex = (value) => {
            console.log(value);
            if (!validTextRegex11.test(value)) {
                console.log(true);
              return true;
            } else {
                console.log(false);
              return false;
            }}
            var validTextRegex12 = /^[0-9/-]+$/;
            const validate12Regex = (value) => {
                console.log(value);
                if (!validTextRegex12.test(value)) {
                    console.log(true);
                  return true;

                } else {
                    console.log(false);
                  return false;
                }}
                var validTextRegex13 = /^[0-9/-]+$/;
                const validate13Regex = (value) => {
                    console.log(value);
                    if (!validTextRegex13.test(value)) {
                        console.log(true);
                      return true;
                    } else {
                        console.log(false);
                      return false;
                    }}
                    var validTextRegex14 = /^[0-9%.]*$/;
                    const validate14Regex = (value) => {
                        console.log(value);
                        if (!validTextRegex14.test(value)) {
                            console.log(true);
                          return true;
                        } else {
                            console.log(false);
                          return false;
                        }}
                        var validText15Regex = /^[0-9/-]+$/;
                        const validate15Regex = (value) => {
                            console.log(value);
                            if (!validText15Regex.test(value)) {
                                console.log(true);
                              return true;
                            } else {
                                console.log(false);
                              return false;
                            }}
                            
    

     const validate8 = (m) => { 
        console.log(m.target.value);
         setXCourse(m.target.value);        
         if (validate8Regex(m.target.value)) { 
             setXCourseErr(true); 
         } else { 
             setXCourseErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate9 = (n) => { 
        console.log(n.target.value);
         setXProgram(n.target.value);        
         if (validate9Regex(n.target.value)) { 
             setXProgramErr(true); 
         } else { 
             setXProgramErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate10 = (o) => { 
        console.log(o.target.value);
         setXCollegeNameandAddress(o.target.value);        
         if (validate10Regex(o.target.value)) { 
             setXCollegeNameandAddressErr(true); 
         } else {  
             setXCollegeNameandAddressErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate11= (p) => { 
        console.log(p.target.value);
         setXUniversityNameandAddress(p.target.value);        
         if (validate11Regex(p.target.value)) { 
             setXUniversityNameandAddressErr(true); 
         } else { 
             setXUniversityNameandAddressErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate12= (q) => { 
        console.log(q.target.value);
         setXDurationFrom(q.target.value);        
         if (validate12Regex(q.target.value)) { 
          setXDurationFromErr(true); 
         } else { 
             setXDurationFromErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate13= (r) => { 
        console.log(r.target.value);
         setXDurationTo(r.target.value);        
         if (validate13Regex(r.target.value)) { 
             setXDurationToErr(true); 
         } else { 
             setXDurationToErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      const validate14= (s) => { 
        console.log(s.target.value);
         setXPercentage(s.target.value);        
         if (validate14Regex(s.target.value)) { 
             setXPercentageErr(true); 
         } else { 
             setXPercentageErr(false);
             //setFirstName(e.target.value);
         }
          
      }; 
      //const validate15= (h) => { 
        //console.log(h.target.value);
         //setxGraduationDate(h.target.value);        
         //if (validate15Regex(h.target.value)) { 
            // setXGraduationDateErr(true); 
        // } else { 
             //setXGraduationDateErr(false);
             //setFirstName(e.target.value);
         //}
          
      //};
     
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
                            <form> 
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Degree :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Degree"
                                        name = "Degree"
                                        className = "form-control"
                                        
                                       
                                     
                                        //  onChange = {(e) => setFirstName(e.target.value)}
                                        >
                                          
                                    </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className = "form-label"> Course :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Course"
                                        name = "Course"
                                        className = "form-control"
                                        required
                                        value = {Course}
                                        onChange = {(e) => validate(e)}
                                    >
                                    </input>
                                    {CourseErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                
                                </div>
                                   
  

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Program :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Program"
                                        name = "Program"
                                        className = "form-control"
                                        required
                                        value = {Program}
                                       
                                        onChange = {(f) => validate1(f)}
                                    >
                                    </input>
                                    {ProgramErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                
                                </div>
                                   
  
                                
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> College Name and Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter College Name and Address"
                                        name = "College Name and Address"
                                        className = "form-control"
                                        
                                        required
                                        value = {CollegeNameandAddress}
                                        onChange = {(g) => validate2(g)}
                                    >
                                    </input>
                                    {CollegeNameandAddressErr && <p style={{color: 'red'}}>Special Characters are not allowed</p>}
                                </div> <div className = "form-group mb-2">
                                    <label className = "form-label">University Name and Address  :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter University Name and Address"
                                        name = "University Name and Address"
                                        className = "form-control"
                                        value = {UniversityNameandAddress}
                                        required
                                       
                                       
                                        onChange = {(h) => validate3(h)}
                                    >
                                    </input>
                                    {UniversityNameandAddressErr && <p style={{color: 'red'}}>Special Characters are not allowed</p>} 
                                
                                </div>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Duration From :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Duration" placeholder="Duration From" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Duration To :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Duration" placeholder="Duration To" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Percentage :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Percentage"
                                        name = "Percentage"
                                        className = "form-control"
                                        value = {Percentage}
                                        required

                                        onChange = {(k) => validate6(k)}
                                    >
                                    </input>
                                    {PercentageErr && <p style={{color: 'red'}}>Only numbers are allowed</p>}  

                                </div>
                                
                                        <div className = "form-group mb-2">
                                    <label className = "form-label"> X :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Your Group"
                                        name = "X"
                                        className = "form-control"
                                        
                                       
                                     
                                        //  onChange = {(e) => setFirstName(e.target.value)}
                                        >
                                          
                                    </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className = "form-label"> Board:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Your Board"
                                        name = "Board"
                                        className = "form-control"
                                        required
                                        value = {XCourse}
                                        onChange = {(m) => validate8(m)}
                                    >
                                    </input>
                                    {XCourseErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                
                                </div>
                                   
  

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Program :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Program"
                                        name = "Program"
                                        className = "form-control"
                                        required
                                        value = {XProgram}
                                       
                                        onChange = {(m) => validate9(m)}
                                    >
                                    </input>
                                    {XProgramErr && <p style={{color: 'red'}}>Only Alphabets are allowed</p>} 
                                
                                </div>
                                   
  
                                
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> School Name and Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter School Name and Address"
                                        name = "School Name and Address"
                                        className = "form-control"
                                        
                                        required
                                        value = {XCollegeNameandAddress}
                                        onChange = {(o) => validate10(o)}
                                    >
                                    </input>
                                    {XCollegeNameandAddressErr && <p style={{color: 'red'}}>Special Characters are not allowed</p>}
                                </div> <div className = "form-group mb-2">
                                    <label className = "form-label">Board Name and Address  :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter University Name and Address"
                                        name = "University Name and Address"
                                        className = "form-control"
                                        value = {XUniversityNameandAddress}
                                        required
                                       
                                       
                                        onChange = {(p) => validate11(p)}
                                    >
                                    </input>
                                    {XUniversityNameandAddressErr && <p style={{color: 'red'}}>Special Characters are not allowed</p>} 
                                
                                </div>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Duration From :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Duration" placeholder="Duration From" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Duration To :</label>
                                    <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="Duration" placeholder="Duration To" />
                        </Form.Group>
                    </div>
                </div>
            </div>
</div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Percentage :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Percentage"
                                        name = "Percentage"
                                        className = "form-control"
                                        value = {XPercentage}
                                        required

                                        onChange = {(s) => validate14(s)}
                                    >
                                    </input>
                                    {XPercentageErr && <p style={{color: 'red'}}>Only numbers are allowed</p>}  

                                </div>
                               
<button type="button" onClick={handleprevClick}>Previous Page</button>
<button type="button" onClick={handleClick}>Next Page</button>
                            </form>

                        </div>
                    </div>
                  </div>

           </div>

        </div>
    )
}

export default EducationInformation;