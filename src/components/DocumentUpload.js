import React from "react";
import { useHistory } from 'react-router-dom';



const DocumentUpload = () => {

  const prevhistory = useHistory();
    const handleprevClick =() =>
    prevhistory.push('/EducationInformation');
    return (
        
        <table class="table">
        <thead class="thead-dark">
    <tr>
      <th scope="col">Aadhar</th>
      <th scope="col">panCard</th>
      <th scope="col">Passport Photo</th>
      </tr>
  </thead>
  <tbody>
  <tr>
      <th><form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload Your Aadhar</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
</form></th>
            
<th><form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload Your PanCard</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
</form></th>

<th><form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload Your Passport Size Photo</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
  </div>
</form></th>


      
      
      </tr>
      
      </tbody>
      <button type="button" onClick={handleprevClick}>Previous Page</button>
</table>
    

);
}

export default DocumentUpload;