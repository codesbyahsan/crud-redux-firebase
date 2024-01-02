import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../store/actions/Actions";
import { Card } from "reactstrap";

function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="container">
      <h2>Save your Login Details</h2>
      <Link to="/create">
        <button className="btn btn-success my-2 mt-4 mb-5">Create +</button>
      </Link>
      <Card className="">
        <table className="table mb-0">
          <thead>
            <tr className="p-5">
              <th className="p-3">ID</th>
              <th className="p-3">Site Names</th>
              <th className="p-3">Username/Email</th>
              <th className="p-3">Passwords</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((val, index) => (
              <tr key={val.id}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{val.name}</td>
                <td className="p-3">{val.email}</td>
                <td className="p-3">{val.password}</td>
                <td>
                  <Link to={`/edit/${val.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(deleteUser(val.id))}
                    className="btn-danger btn ms-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Home;
