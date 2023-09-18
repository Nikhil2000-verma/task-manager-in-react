import React, { useEffect } from 'react'
import { FetchUserList, Removeuser } from '../Redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, [])

  const handledelete = (code) => {
    if (window.confirm('Do You Want To Remove?')) {
      props.removeuser(code);
      props.loaduser();
      toast.success('User removed successfully')
    }
  }
  return (
    props.user.loading ? <div><h2>Loading...</h2></div> :
      props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
        <div className='container'>
          <div>
            <h2 className='margin-top'>ALL USER LIST</h2>
          </div>
          <div className='add_user_style'>
          <Link className='btn btn-success' to={'/user/add'}>Add User [+]</Link>
          </div>
          <table class="table  table-striped table-bordered">
            <thead className='table-dark'>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Employee Code</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                props.user.userlist && props.user.userlist.map((item, index) =>
                  <tr key={item.id}>
                    <th>{index + 1}</th>
                    <td>{item.employee}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Link to={'/user/edit/' + item.id} ><i class="fa fa-edit" size="lg" style={{color: "#007508", fontSize: "22px"}}></i></Link> &nbsp;
                      <Link onClick={() => {handledelete(item.id)}}><i class="fa fa-trash" size="lg" style={{color: "#dc3545", fontSize: "22px"}}></i></Link>
                     
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(Removeuser(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting)