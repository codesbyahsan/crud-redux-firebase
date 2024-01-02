import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/actions/Actions";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({});

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, updateData));
    navigate("/");
  };

  return (

    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border text-white p-4">
      <h3 className="pb-2">Add new Updates</h3>
      <form onSubmit={handleUpdate}>
        <div className="pb-3">
          <label htmlFor="Name">Website:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            value={updateData && updateData.name}
            onChange={newData}
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
            value={updateData && updateData.email}
            onChange={newData}
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
            value={updateData && updateData.password}
            onChange={newData}
            required
          />
        </div>
        <br />
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default Update;
