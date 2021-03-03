import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Event from "./components/Events/Events";
import Training from "./components/Trainings/Ftraining";
import Teacher from "./components/Teachers/Teacher";
import ShowEvents from "./components/Events/ShowEvents";
import ShowTraining from "./components/Trainings/ShowTrainings";
import Tab from "./components/Tab/Tab";
import Logout from "./components/Tab/Logout";
function App() {
    const [username, setusername] = useState("");
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        if (username === "welcome") setFlag(true);
    }, [username]);
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
                                        <Link to="/events">
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
                <Tab flag={flag} />

                <div className="container events-div">
                    {flag === false ? (
                        <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">
                                Error:You Don't have the rights to access this
                                page.
                            </h4>
                            <p>
                                Aww yeah, you successfully read this important
                                alert message. This example text is going to run
                                a bit longer so that you can see how spacing
                                within an alert works with this kind of content.
                            </p>
                            <hr />
                            <p class="mb-0">
                                Whenever you need to, be sure to use margin
                                utilities to keep things nice and tidy.
                            </p>
                        </div>
                    ) : (
                        <div className="row">
                            <div
                                className="col-md-6"
                                style={{
                                    borderRight: "1px solid black",
                                    height: "100vh",
                                }}
                            >
                                <Event flag={flag} />
                            </div>
                            <div className="col-md-6">
                                {" "}
                                <ShowEvents flag={flag} />
                            </div>
                        </div>
                    )}
                </div>
            </Route>

            <Route path="/add_trainings" exact={true}>
                <Tab />
                <div className="container events-div">
                    <div className="row">
                        <div
                            className="col-md-12"
                            style={{
                                height: "100vh",
                            }}
                        >
                            <Training flag={flag} />
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/teachers" exact={true}>
                <Tab />
                <Teacher flag={flag} />
            </Route>
            <Route path="/edit_training" exact={true}>
                <Tab />
                <ShowTraining flag={flag} />
            </Route>
            <Route path="/logout" exact={true}>
                <Tab />
                <Logout func={setFlag} />
            </Route>
        </Router>
    );
}

export default App;
