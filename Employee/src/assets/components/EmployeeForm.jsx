import React from 'react'

const EmployeeForm = () => {
  return (
    <div className='container'>
      
      <form>
        <h2>Employment Form</h2>
        
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name'/>
        <br/>
        <label htmlFor='email'>Email Address</label>
        <input type='email' id='email' name='email'/>
        <br/>

        <label htmlFor='phone'>Phone Number</label>
        <input type='number' id='phone' name='phone'/>
        <br/>

        <label htmlFor='image'>Image</label>
        <input type='file' id='image' name='image'/>
        <br/>
        
        <div>
        <label htmlFor='position'>Select Position</label>
        <div class='pos'>
        <select name="position" id="position">
        <option value="selectpos">select position</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        </div>
        
        </div>
        <div className='button'>
        <button>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default EmployeeForm