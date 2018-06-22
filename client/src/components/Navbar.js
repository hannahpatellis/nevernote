import React from "react";
// Because we're using react-router-dom, we need to use the Link component to navigate between pages
import { Link } from "react-router-dom";

// Navbar doesn't need a state because it doesn't change or preform any logic.

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        {/* We need to use <Link> here because we are directing to a page within our own site and react-router-dom needs a <Link> not <a> tag */}
        <Link className="navbar-brand" to="/"><i className="mr-2 fas fa-tags"></i> Nevernote</Link>
    </nav>
);

export default Navbar;