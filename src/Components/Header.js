import React from "react"
import { Link } from "react-router-dom"
import "../Style/Components/Header.css"

/**
 * Component for generate Header
 * @component
 * @returns {object} Header
 */
const Header = () => {
    return (
        <div className="Header">
            <Link to={"/"}>
                <img
                    src=".\logo_Wealth_Health.jpg"
                    alt="HRnet"
                    className="Header__logo"
                />
            </Link>
            <h1 className="Header__h1">HRnet</h1>
        </div>
    )
}

export default Header
