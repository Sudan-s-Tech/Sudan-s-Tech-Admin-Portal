import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Event from "./components/Events/Events";
import Training from "./components/Trainings/Ftraining";
import Test from "./test";
import Teacher from "./components/Teachers/Teacher";
import ShowEvents from "./components/Events/ShowEvents";
import ShowTraining from "./components/Trainings/ShowTrainings";
import Tab from "./components/Tab/Tab";
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
                <Tab />
                <div className="container events-div">
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
            <Route path="/test" exact={true}>
                <Test />
            </Route>
        </Router>
    );
}

export default App;
