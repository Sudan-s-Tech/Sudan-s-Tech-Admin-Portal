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
        axios.post("https://sudanstechapi.herokuapp.com/events/create", {
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
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
                <span class="input-group-text" id="inputGroup-sizing-default">
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
            <button type="button" class="btn btn-success" onClick={handler}>
                Submit
            </button>
        </div>
    );
}
