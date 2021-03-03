import axios from "axios";
import React, { useState, useEffect } from "react";
// var array = [];
export default function ShowEvents(props) {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get("https://sudanstechapi.herokuapp.com/events").then((res) => {
            setEvents(res.data);
        });
    }, []);

    function eventRemover(eve_id) {
        // console.log(eve_id);
        axios.delete("https://sudanstechapi.herokuapp.com/events/remove", {
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
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
