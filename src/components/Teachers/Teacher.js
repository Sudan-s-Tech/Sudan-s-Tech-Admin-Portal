import React, { useState } from "react";
import axios from "axios";
export default function Teacher() {
    const [teacher_obj, setteacher_obj] = useState({
        name: "",
        bio: "",
        imgurl: "",
        twitter: "",
        linkedin: "",
        course: "",
    });
    function handler() {
        axios.post("http://localhost:5000/teacher/create", {
            data: teacher_obj,
        });
    }
    return (
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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

            <button onClick={handler}>Submit</button>
        </div>
    );
}
