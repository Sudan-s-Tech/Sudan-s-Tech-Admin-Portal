import React, { useState, useEffect } from "react";
import axios from "axios";
import Update from "../../components/Trainings/Update";
export default function ShowTrainings(props) {
    const [fetched_course, setFetched_course] = useState([]);
    const [name, setname] = useState("");
    useEffect(() => {
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                setFetched_course(res.data);
            });
    }, []);
    function Trainingremover(entity) {
        axios.delete("https://sudanstechapi.herokuapp.com/trainings/remove", {
            data: {
                id: entity,
            },
        });
    }
    return (
        <div>
            {props.flag === false ? (
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">
                        Error:You Don't have the rights to access this page.
                    </h4>
                    <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                    </p>
                    <hr />
                    <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                    </p>
                </div>
            ) : (
                <div>
                    {" "}
                    <div className="container events-div">
                        <div className="row">
                            {" "}
                            <div
                                className="col-md-6"
                                style={{
                                    borderRight: "1px solid black",
                                    height: "100vh",
                                }}
                            >
                                {fetched_course.map((crs) => {
                                    return (
                                        <div class="card mt-3">
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
                                                    Update
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-danger ml-2"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        Trainingremover(
                                                            crs._id
                                                        );
                                                    }}
                                                >
                                                    delete
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}{" "}
                            </div>
                            <div className="col-md-6">
                                {" "}
                                <Update name={name} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
