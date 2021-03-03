import React, { useState, useEffect } from "react";
import axios from "axios";
import Update from "../../components/Trainings/Update";
export default function ShowTrainings() {
    const [fetched_course, setFetched_course] = useState([]);
    const [name, setname] = useState("");
    useEffect(() => {
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                setFetched_course(res.data);
            });
    }, []);
    return (
        <div>
            {fetched_course.map((crs) => {
                return (
                    <div className="container events-div">
                        <div className="row">
                            <div
                                className="col-md-6"
                                style={{
                                    borderRight: "1px solid black",
                                    height: "100vh",
                                }}
                            >
                                <div class="card">
                                    <div class="card-body">
                                        <h6>{crs.title}</h6>
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setname(crs._id);
                                            }}
                                        >
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {" "}
                                <Update name={name} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
