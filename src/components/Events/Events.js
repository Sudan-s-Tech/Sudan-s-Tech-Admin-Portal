import React, { useState } from "react";
import axios from "axios";
export default function Events() {
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("");
    function handler() {
        axios.post("http://localhost:5000/events/create", {
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

    return (
        <div>
            <input
                placeholder="Heading"
                onChange={(e) => {
                    e.preventDefault();
                    setHeading(e.target.value);
                }}
            />
            <input
                placeholder="Description"
                onChange={(e) => {
                    setDesc(e.target.value);
                }}
            />
            <input
                placeholder="startdate"
                onChange={(e) => {
                    setStart(e.target.value);
                }}
            />
            <input
                placeholder="enddate"
                onChange={(e) => {
                    setEnd(e.target.value);
                }}
            />
            <input
                placeholder="link"
                onChange={(e) => {
                    setLink(e.target.value);
                }}
            />
            <input
                placeholder="img-link"
                onChange={(e) => {
                    setImg(e.target.value);
                }}
            />
            <button onClick={handler}>Submit</button>
        </div>
    );
}
