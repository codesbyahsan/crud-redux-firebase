import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/actions/Actions';

function Create() {
  const Navigate = useNavigate();
    const [users, setUsers] = useState()

    const getUserData = (e)=>{
        setUsers({...users, [e.target.name] : e.target.value })
    }
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();
        dispatch(addUser(users))
        Navigate('/')
      }
   
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border text-white p-4">
      <h3 className="pb-2">Add new Updates</h3>
      <form onSubmit={handleSubmit}>
        <div className="pb-3">
          <label htmlFor="Name">Website:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            onChange={getUserData}
            required
          />
        </div>
        <div className="pb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your Email"
            onChange={getUserData}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={getUserData}
            required
          />
        </div>
        <br />
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default Create;
