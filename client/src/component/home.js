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
  MdLibraryAdd,
  MdRemoveRedEye,
} from "react-icons/md";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPosts = () => {
    axios({
      method: "GET",
      url: "http://localhost:3500/posts",
    })
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h3>Home Page</h3>
      <a href="#">Add Post</a>
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
          <div class="card" key={id}>
            <div class="card-body">
              <h5 class="card-title">
                <MdStickyNote2 />
                {title}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                <MdPerson2 /> User {userId}
              </h6>
              <p class="card-text">{content}</p>
              <a href="#" className="card-link">
                Update
              </a>
              <a href="#" className="card-link">
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
