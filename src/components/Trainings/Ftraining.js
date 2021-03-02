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
        items: [{}],
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
        axios.post("http://localhost:5000/trainings/create", {
            data: await ar,
        });
        // axios.post("https://sudanstechapi.herokuapp.com/trainings/create", {
        //     data: ar,
        // });
        console.log(ar);
    }

    async function add_submodule() {
        obj.items = submodules;
        ar.items.push(obj);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        title: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="body"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        body: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="image url"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        imageurl: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="form url"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        formurl: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="description"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        description: e.target.value,
                    }));
                }}
            />
            <input
                type="number"
                placeholder="lesson"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        lesson: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="level"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        level: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="duration"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        duration: e.target.value,
                    }));
                }}
            />
            <input
                type="text"
                placeholder="about"
                onChange={(e) => {
                    e.preventDefault();
                    setAr((prevState) => ({
                        ...prevState,
                        about: e.target.value,
                    }));
                }}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    add_module();
                }}
            >
                Add module
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    increment();
                }}
            >
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
                        <input key={i} placeholder="module name" />
                        <input
                            key={i}
                            placeholder="submodules"
                            onChange={(e) => {
                                e.preventDefault();
                                setsubmodules(e.target.value);
                            }}
                        />{" "}
                        <button type="submit">Add sub Module</button>
                    </form>
                </div>
            ))}
        </div>
    );
}
