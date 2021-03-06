import { Link } from "react-router-dom";
import "../../css/App.css";
import React from "react";

function Home() {
    return (
        <div>
            <div/>
            <div className="text-center bg-image marginUp">
                <br></br>
                <h1>Welcome to Middle Earth Maps</h1>
                <p>Explore the world of middle earth with our map.</p>
                <Link to="../map" className="btn btn-primary App">
                   Open Map
                </Link>
            </div>
        </div>
    );
}

export default Home;
