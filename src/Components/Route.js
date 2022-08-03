import React, { useEffect } from "react"
import "../Style/Components/Route.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

/**
 * Generate component with link
 * @component
 * @returns {object} links to different pages
 */
const Route = () => {
    const location = useLocation().pathname

    /**
     * toggle active page
     */
    useEffect(() => {
        if (location === "/") {
            document.getElementById("add").classList.remove("underline")
            document.getElementById("list").classList.add("underline")
        } else if (location === "/list") {
            document.getElementById("list").classList.remove("underline")
            document.getElementById("add").classList.add("underline")
        }
    }, [location])

    return (
        <div className="Route">
            <Link id="add" className="Route__link" to={"/"}>
                Add Employees
            </Link>
            <Link id="list" className="Route__link" to={"/list"}>
                View Current Employees
            </Link>
        </div>
    )
}

export default Route
