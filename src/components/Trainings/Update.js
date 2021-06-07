import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var local_modules = [];
export default function Update(props) {
    const [course, setcourse] = useState({});
    const [wait, setwait] = useState(false);
    const notify = () => {
        toast.success("Training Updated!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    useEffect(() => {
        axios
            .get("https://sudans-api.herokuapp.com/trainings")
            .then((res) => {
                res.data.map((item) => {
                    if (item._id == props.name) {
                        setcourse(item);
                        setwait(true);
                        local_modules = item.modules;
                    }
                });
            });
    }, [props.name]);

    function submitHandler() {
        course.id = props.name;
        course.modules = local_modules;
        console.log(course);
        // console.log(local_modules);
        axios
            .put("https://sudans-api.herokuapp.com/training/change", {
                data: course,
            })
            .then(console.log("sent"));
    }
    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        Title
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
                {/* <div class="input-group mb-3">
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
                </div> */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        level
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
                        body
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
                        Live
                    </span>
                    <input
                        type="boolean"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={course.live}
                        onChange={(e) => {
                            e.preventDefault();
                            setcourse((prevState) => ({
                                ...prevState,
                                live: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        about
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
                        duration
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
                        lesson
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
                        description
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
                        formurl
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
                        imageurl
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
                {console.log(local_modules)}
                {
                    wait === true ? (
                        course.modules.map((entity, i) => {
                            return (
                                <div>
                                    <div class="input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                        >
                                            sub title
                                        </span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            placeholder={entity.title}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                // setcourse((prevState) => ({
                                                //     ...prevState,
                                                //     modules: [

                                                //         {
                                                //             title:
                                                //                 e.target.value,
                                                //         },
                                                //     ],
                                                // }));
                                                local_modules[i].title =
                                                    e.target.value;
                                            }}
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                        >
                                            sub items
                                        </span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            placeholder={entity.items}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                // setcourse((prevState) => ({
                                                //     ...prevState,
                                                //     modules: [
                                                //         {
                                                //             items:
                                                //                 e.target.value,
                                                //         },
                                                //     ],
                                                // }));
                                                local_modules[i].items =
                                                    e.target.value;
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div></div>
                    )
                    // console.log(course)
                }
            </form>
            <button
                type="submit"
                class="btn btn-success"
                onClick={(e) => {
                    e.preventDefault();
                    submitHandler();
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
    );
}
