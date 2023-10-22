/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {
  MdPerson2,
  MdStickyNote2,
  MdDeleteOutline,
  MdOutlineModeEdit,
  MdAdd,
} from "react-icons/md";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPosted = () => {
    axios({
      method: "GET",
      url: "http://localhost:3500/posts/posted",
    })
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHandler = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "DELETE",
            url: `http://localhost:3500/posts/deletepost/${id}`,
          });
          getPosted();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosted();
  }, []);

  return (
    <div className="container">
      <h3>Home Page / Public Posted</h3>
      <a href="/posting">
        <MdAdd />
        Add Post
      </a>
      {/* versi table */}
      {/* <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>User Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((x) => {
            const { id, title, content, userId } = x;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td>{userId}</td>
                <td>
                  <button className="btn btn-sm btn-info">Detail</button>
                  <button className="btn btn-sm btn-warning">Update</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* versi cards */}
      {posts.map((x) => {
        const { id, title, content, userId } = x;
        return (
          <div class="card mt-3 mb-3" key={id}>
            <div class="card-body">
              <h5 class="card-title">
                <MdStickyNote2 />
                {title}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                <MdPerson2 /> User {userId}
              </h6>
              <p class="card-text">{content}</p>
              <a
                className="card-link"
                onClick={() => navigate(`posting/${id}`)}
              >
                <MdOutlineModeEdit />
                Update
              </a>
              <a className="card-link" onClick={() => deleteHandler(id)}>
                <MdDeleteOutline />
                Delete
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
