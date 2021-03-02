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
            <input
                type="text"
                placeholder="name"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="bio"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        bio: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="image url"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        imgurl: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="twitter profile url"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        twitter: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="linkedin profile url"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        linkedin: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="course assigned"
                onChange={(e) => {
                    e.preventDefault();
                    setteacher_obj((prevState) => ({
                        ...prevState,
                        course: e.target.value,
                    }));
                }}
            />
            <button onClick={handler}>Submit</button>
        </div>
    );
}
