import React, { useState } from "react";
import axios from "axios";
export default function Test() {
    const [ar, setAr] = useState({
        title: "",
        body: "",
        description: "",
        imageurl: "",
        formurl: "",
        about: "",
        lesson: 0,
        duration: "",
        level: 0,
        modules: [{}],
    });
    const [submodules, setsubmodules] = useState("");
    const [n, setN] = useState(1);

    var obj = {
        title: "",
        items: "",
    };
    function increment() {
        setN(n + 1);
    }
    function titleHandler(main_title) {
        obj.title = main_title;
    }
    async function add_module() {
        axios.post("http//localhost:5000/trainings/create", {
            data: await ar,
        });
    }

    async function add_submodule() {
        obj.items = submodules;
        ar.modules.push(obj);
    }

    return (
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    title
                </span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            title: e.target.value,
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
                    placeholder="description"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            description: e.target.value,
                        }));
                    }}
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    form-url
                </span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="form url"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            formurl: e.target.value,
                        }));
                    }}
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    image-url
                </span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="image url"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            imageurl: e.target.value,
                        }));
                    }}
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    Body
                </span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="body"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            body: e.target.value,
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
                    placeholder="about"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
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
                    placeholder="duration"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            duration: e.target.value,
                        }));
                    }}
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    Level
                </span>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="level"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            level: e.target.value,
                        }));
                    }}
                />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    Lessons
                </span>
                <input
                    type="number"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    placeholder="body"
                    placeholder="lesson"
                    onChange={(e) => {
                        e.preventDefault();
                        setAr((prevState) => ({
                            ...prevState,
                            lesson: e.target.value,
                        }));
                    }}
                />
            </div>

            <button
                type="button"
                class="btn btn-info"
                onClick={(e) => {
                    e.preventDefault();
                    increment();
                }}
            >
                {" "}
                increment module
            </button>

            {[...Array(n)].map((e, i) => (
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            titleHandler(e.target[0].value);
                            add_submodule();
                        }}
                    >
                        <div class="input-group mb-3" key={i}>
                            <span class="input-group-text" id="basic-addon1">
                                Module Name
                            </span>
                            <input
                                key={i}
                                type="text"
                                class="form-control"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                placeholder="module name"
                            />
                        </div>
                        <div class="input-group mb-3" key={i}>
                            <span class="input-group-text" id="basic-addon1">
                                Sub-Modules
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Username"
                                key={i}
                                aria-describedby="basic-addon1"
                                placeholder="submodules"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setsubmodules(e.target.value);
                                }}
                            />
                        </div>
                        <button type="submit" class="btn btn-warning">
                            Add sub Module
                        </button>
                    </form>
                </div>
            ))}
            <button
                type="button"
                class="btn btn-success"
                onClick={(e) => {
                    e.preventDefault();
                    add_module();
                }}
            >
                {" "}
                Add module
            </button>
        </div>
    );
}
