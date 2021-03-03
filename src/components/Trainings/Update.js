import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Update(props) {
    const [course, setcourse] = useState({});
    useEffect(() => {
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                res.data.map((item) => {
                    if (item._id == props.name) {
                        setcourse(item);
                        console.log(item.title);
                    }
                });
                console.log(course);
            });
    }, [props.name]);
    function submitHandler() {
        course.id = "603e223904e19d42e44fe3d6";

        axios.put("https://sudanstechapi.herokuapp.com/training/change", {
            data: course,
        });
        console.log("sent");
    }
    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.title}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.body}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                body: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.level}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                level: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.body}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                body: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.about}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                about: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.duration}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                duration: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.lesson}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                lesson: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.description}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                description: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.formurl}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                formurl: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        @
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.imageurl}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                imageurl: e.target.value,
                            }));
                        }}
                    />
                </div>
            </form>
            <button
                type="submit"
                class="btn btn-success"
                onClick={(e) => {
                    e.preventDefault();
                    submitHandler();
                }}
            >
                Submit
            </button>
        </div>
    );
}
