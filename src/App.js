import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Event from "./components/Events/Events";
import Training from "./components/Trainings/Training";
import Test from "./test";
import Teacher from "./components/Teachers/Teacher";
function App() {
    const [username, setusername] = useState("");

    return (
        <Router>
            <Route path="/" exact={true}>
                <div className="App">
                    <Nav />
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <form>
                                        <input
                                            type="password"
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setusername(e.target.value);
                                            }}
                                        />{" "}
                                        <br />
                                        <Link to="/panel">
                                            <button
                                                class="button"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                                <div className="col-md-12">
                                    {/* <img src={Octa} style={{ width: "50%" }} /> */}
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </Route>
            <Route path="/events" exact={true}>
                <Event />
            </Route>
            <Route path="/trainings" exact={true}>
                <Training />
            </Route>
            <Route path="/teachers" exact={true}>
                <Teacher />
            </Route>
            <Route path="/test" exact={true}>
                <Test />
            </Route>
        </Router>
    );
}

export default App;
