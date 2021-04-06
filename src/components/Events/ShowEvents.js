import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// var array = [];
export default function ShowEvents(props) {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get("https://sudans-api.herokuapp.com/events").then((res) => {
            setEvents(res.data);
        });
    }, []);

    const notify = () => {
        toast.error("Event Deleted!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    function eventRemover(eve_id) {
        // console.log(eve_id);
        axios.delete("https://sudans-api.herokuapp.com/events/remove", {
            data: {
                id: eve_id,
            },
        });
    }

    return (
        <div>
            {props.flag === false ? (
                <h1>Error</h1>
            ) : (
                <div>
                    {events.map((o, i) => {
                        return (
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="display-6">{o.title}</h5>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={(e) => {
                                            eventRemover(o._id);
                                            notify();
                                        }}
                                    >
                                        Delete
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
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
