import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUserById } from "./../redux/actions/user";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user?.loading);
  const usersList = useSelector((state) => state.user?.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    const result = window.confirm("Are you sure to delete this user?");
    if (result) {
      dispatch(deleteUserById(id));
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand w-100" style={{ textAlign: "center" }}>
          Next.js 11 - CRUD App With Redux Thunk
        </p>
      </nav>
      <div className="container">
        <Link href={"/users/add"}>
          <button className="btn btn-primary ml-auto">Create User</button>
        </Link>
        {usersList.length === 0 ? (
          loading ? (
            <p className="text-center my-4 text-bold">LOADING...</p>
          ) : (
            <p className="text-center my-4 text-bold">NO RECORDS FOUND...</p>
          )
        ) : (
          <table className="table my-4">
            <thead>
              <tr>
                <th>
                  <abbr title="Position">SNo.</abbr>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {usersList.length > 0 &&
                usersList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <Link href={`/users/edit/${item._id}`}>
                          <button className="btn btn-success mx-1">Edit</button>
                        </Link>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
