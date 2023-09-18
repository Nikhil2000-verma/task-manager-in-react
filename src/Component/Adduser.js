import React, { useState } from 'react'
import { FunctionAddUser } from '../Redux/Action';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Adduser = () => {

  const [employee, employeeChange] = useState('');
  const [name, nameChange] = useState('');
  const [email, emailChange] = useState('');
  const [phone, phoneChange] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();



  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { employee, name, email, phone };
    dispatch(FunctionAddUser(userobj))
    //console.log(userobj);
    navigate('/');
  }

  return (
    <div className='text-start container'>
      <div>
        <h2 className='margin-top text-center'>ADD NEW USER</h2>
      </div>
      <form onSubmit={handlesubmit}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmployee" className="form-label">Employee Code</label>
          <input type="text" value={employee} onChange={e => employeeChange(e.target.value)} className="form-control" id="employee" aria-describedby="enameHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" value={name} onChange={e => nameChange(e.target.value)} className="form-control" id="name" aria-describedby="enameHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" value={email} onChange={e => emailChange(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
        </div>



        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
          <input type="number" value={phone} onChange={e => phoneChange(e.target.value)} className="form-control" id="phone" aria-describedby="phoneHelp" />
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>&nbsp; &nbsp;
        <Link className="btn btn-danger" to={'/'}>Back</Link>
      </form>
    </div>
  )
}

export default Adduser