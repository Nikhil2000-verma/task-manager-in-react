import React, { useEffect, useState } from 'react'
import { FetchUserObj, FunctionUpdateUser } from '../Redux/Action';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Updateuser = () => {
  const [id, idChange] = useState(0);
  const [employee, employeeChange] = useState('');
  const [name, nameChange] = useState('');
  const [email, emailChange] = useState('');
  const [phone, phoneChange] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state) => state.user.userobj)



  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { id, employee, name, email, phone };
    dispatch(FunctionUpdateUser(userobj, id));
    //console.log(userobj);
    navigate('/');
  }

  useEffect(() => {
    dispatch(FetchUserObj(code))
  }, [])

  useEffect(() => {
    if (userobj) {
      idChange(userobj.id)
      employeeChange(userobj.employee)
      nameChange(userobj.name)
      emailChange(userobj.email)
      phoneChange(userobj.phone)
    }
  }, [userobj])

  return (
    <div className='text-start container'>
      <div>
        <h2 className='text-center margin-top'>UPDATE USER</h2>
      </div>
      <form onSubmit={handlesubmit}>

        {/* <div className="mb-3">
          <label htmlFor="exampleInputid" className="form-label">Id</label>
          <input type="text" disabled="disabled" value={id || ''} onChange={e => nameChange(e.target.value)} className="form-control" id="id" aria-describedby="idHelp" />
        </div>*/}

        <div className="mb-3">
          <label htmlFor="exampleInputemployee" className="form-label">Employee Code</label>
          <input type="text" value={employee || ''} onChange={e => employeeChange(e.target.value)} className="form-control" id="employee" aria-describedby="nameHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" value={name || ''} onChange={e => nameChange(e.target.value)} className="form-control" id="name" aria-describedby="nameHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" value={email || ''} onChange={e => emailChange(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
        </div>



        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
          <input type="number" value={phone || ''} onChange={e => phoneChange(e.target.value)} className="form-control" id="phone" aria-describedby="phoneHelp" />
        </div>


        <button type="submit" className="btn btn-primary">Submit</button> &nbsp; &nbsp;
        <Link className="btn btn-danger" to={'/'}>Back</Link>
      </form>
    </div>
  )
}

export default Updateuser