import React from "react";
// Because we're using react-router-dom, we need to use the Link component to navigate between pages
import { Link } from "react-router-dom";

// Navbar doesn't need a state because it doesn't change or preform any logic.

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Nevernote</Link>
    </nav>
);

export default Navbar;