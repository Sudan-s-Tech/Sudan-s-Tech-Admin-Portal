import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav
                class="navbar navbar-light"
                style={{ backgroundColor: "#E4EBF5" }}
            >
                <a class="navbar-brand" href="#">
                    <img
                        src="https://sudans.tech/_nuxt/img/logo.d584309.png"
                        width="50"
                        height="50"
                        alt=""
                    />
                    Sudan's Tech Admin Portal
                </a>
            </nav>
        </div>
    );
}
