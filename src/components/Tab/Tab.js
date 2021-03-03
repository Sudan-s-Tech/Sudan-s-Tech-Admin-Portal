import React from "react";
import { Link } from "react-router-dom";
export default function Tab() {
    return (
        <div>
            <ul class="nav nav-pills nav-fill mb-5">
                <Link to="/events">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Create and Delete Events
                        </a>
                    </li>
                </Link>

                <Link to="/add_trainings">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Create Training
                        </a>
                    </li>
                </Link>

                <Link to="/teachers">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Create Teacher
                        </a>
                    </li>
                </Link>
                <Link to="/edit_training">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Edit Trainings
                        </a>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
