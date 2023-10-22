/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { MdClose, MdRefresh, MdSave } from "react-icons/md";

const Posting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [post, setPost] = useState("");

  const onSubmit = async (data1) => {
    setPost(data1);
    console.log(post);
    await axios({
      method: "POST",
      url: `http://localhost:3500/posts/addpost`,
      data: data1,
    });
    Swal.fire("Good job!", "Data item berhasil ditambahkan", "success");
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Posting</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control" class="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" {...register("title")} />
        </div>
        <div className="form-control" class="mb-3">
          <label className="form-label">Content</label>
          {/* <input type="text" class="form-control" {...register("content")} /> */}
          <textarea
            class="form-control"
            rows="3"
            {...register("content")}
          ></textarea>
        </div>
        <div classname="form-control" class="mb-3">
          <label class="form-label">User Id</label>
          <input
            type="text"
            class="form-control"
            {...register("userId", { valueAsNumber: true })}
          />
        </div>
        {/* <div classname="form-control" class="mb-3">
          <label class="form-label">Status (1/2)</label>
          <input
            type="text"
            class="form-control"
            {...register("status", { valueAsNumber: true })}
          />
        </div> */}
        <div>
          <label className="form-label">Posting to public?</label>
          <select
            className="form-select"
            {...register("status", { valueAsNumber: true })}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
          <br></br>
        </div>
        <button type="submit" class="btn btn-success" id="btnSubmit">
          <MdSave />
          Submit
        </button>
        <button
          onClick={() => navigate("/posting")}
          class="btn btn-primary"
          id="btnReset"
        >
          <MdRefresh />
          Reset
        </button>
        <button
          onClick={() => navigate("/")}
          class="btn btn-danger"
          id="btnBack"
        >
          <MdClose />
          Back
        </button>
      </form>
      <p>Data: {JSON.stringify(post)}</p>
    </div>
  );
};

export default Posting;
