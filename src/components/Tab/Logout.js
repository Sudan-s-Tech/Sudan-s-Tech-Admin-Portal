import React from "react";
import { Link } from "react-router-dom";
export default function Logout(props) {
    return (
        <div className="container">
            {props.func(false)}
            <div className="row">
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
                <div
                    className="col-sm-12"
                    align="center"
                    style={{ marginTop: "10vh" }}
                >
                    <Link to="/">
                        <button type="button" class="btn btn-success btn-lg">
                            Login Again
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
