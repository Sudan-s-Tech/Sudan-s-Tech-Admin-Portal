import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Update(props) {
    const [course, setcourse] = useState({});
    useEffect(() => {
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                res.data.map((item) => {
                    console.log(item.title);
                    if (item.title == "Cyber Security the life style")
                        setcourse(item);
                    // if (item.title === props.name) setcourse(item);
                });
                console.log(course);
            });
    }, []);
    function submitHandler() {
        course.id = "603e223904e19d42e44fe3d6";

        axios.put("https://sudanstechapi.herokuapp.com/training/change", {
            data: course,
        });
        console.log("sent");
    }
    return (
        <div>
            <form
            // onSubmit={(e) => {
            //     e.preventDefault();
            //     submitHandler();
            // }}
            >
                <input
                    type="text"
                    placeholder="title"
                    value={course.title}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            title: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="body"
                    value={course.body}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            body: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="image url"
                    value={course.imageurl}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            imageurl: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="form url"
                    value={course.formurl}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            formurl: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={course.description}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            description: e.target.value,
                        }));
                    }}
                />
                <input
                    type="number"
                    placeholder="lesson"
                    value={course.lesson}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            lesson: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="duration"
                    value={course.duration}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            duration: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="about"
                    value={course.about}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            about: e.target.value,
                        }));
                    }}
                />
                <input
                    type="text"
                    placeholder="level"
                    value={course.level}
                    onChange={(e) => {
                        e.preventDefault();
                        setcourse((prevState) => ({
                            ...prevState,
                            level: e.target.value,
                        }));
                    }}
                />
            </form>
            <button
                type="submit"
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
