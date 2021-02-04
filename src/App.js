import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
    const [username, setusername] = useState("");

    return (
        <div className="App">
            <Router>
                <Route>
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
                    </div>
                </Route>
            </Router>
        </div>
    );
}

export default App;
