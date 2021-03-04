import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Teacher(props) {
    const [teacher_obj, setteacher_obj] = useState({
        name: "",
        bio: "",
        imgurl: "",
        twitter: "",
        linkedin: "",
        course: "",
    });
    const notify = () => {
        toast.success("Training Created!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    function handler() {
        axios.post("https://sudanstechapi.herokuapp.com/teacher/create", {
            data: teacher_obj,
        });
    }
    return (
        <div>
            {props.flag === false ? (
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">
                        Error:You Don't have the rights to access this page.
                    </h4>
                    <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                    </p>
                    <hr />
                    <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                    </p>
                </div>
            ) : (
                <div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Name
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    name: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Course
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    course: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            linkedin
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    linkedin: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            twitter
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    twitter: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Image-url
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    imgurl: e.target.value,
                                }));
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Bio
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setteacher_obj((prevState) => ({
                                    ...prevState,
                                    bio: e.target.value,
                                }));
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-success"
                        // onClick={handler}
                        onClick={(e) => {
                            e.preventDefault();
                            handler();
                            notify();
                        }}
                    >
                        Submit
                    </button>
                    <ToastContainer
                        position="top-right"
                        autoClose={1500}
                        Type="success"
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        pauseOnHover
                    />
                </div>
            )}
        </div>
    );
}
