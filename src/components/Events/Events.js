import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Events(props) {
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("");
    function handler() {
        axios.post("https://sudans-api.herokuapp.com/events/create", {
            data: {
                title: heading,
                link: link,
                imgurl: img,
                description: desc,
                startdate: start,
                enddate: end,
            },
        });
    }
    const notify = () => {
        toast.success("Event Created!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <div>
            {props.flag === false ? (
                <h1>error</h1>
            ) : (
                <div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            title
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                e.preventDefault();
                                setHeading(e.target.value);
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
                                setImg(e.target.value);
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Link
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setLink(e.target.value);
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            End-date
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setEnd(e.target.value);
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Start-date
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setStart(e.target.value);
                            }}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span
                            class="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Description
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="button"
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
