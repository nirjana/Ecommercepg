import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify.js"
import "./admin.css";

const Users = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log("mathi", data);
        setUsers(data.data);
      });
  }, []);

  const Delete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.data);
        fetch(`${process.env.REACT_APP_API_URL}/users`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.details) {
              console.log("ddd", data.data);
              setUsers(data.data);
              notify.success("deleted");
            } else {
              notify.error(data.details);
            }
          });
      })
      .catch((error) => {
        notify.error(error);
        console.error("Error:", error);
      });
  };

    return (
      <>
        {" "}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
          <Link to="/userRegister">Add Users</Link>
        </button>
        <table class="table-auto w-full text-center text-white bg-gray-800">
          <thead class="font-medium">
            <tr>
              <th class="px-4 py-2">Full Name</th>
              <th class="px-4 py-2">Username</th>
              <th class="px-4 py-2">Password</th>
              <th class="px-4 py-2">Edit</th>
              <th class="px-4 py-2">Delete</th>
            </tr>
          </thead>
          {users &&
            users.map((item, i) => {
              return (
                <>
                  <tr key={item.i} class="hover:bg-gray-700">
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        {" "}
                        <Link to={`../products/edit/${item.id}`}> Edit </Link>
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => {
                          Delete(item.id);
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </table>
        <ToastContainer autoClose={4000} />
      </>
    );
  }

  export default Users
