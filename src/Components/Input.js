import React, { Fragment } from "react"

const Input = ({ id, desc, type, onchange }) => {
    return (
        <Fragment>
            <label htmlFor={id}>{desc}</label>
            <input type={type} id={id} onChange={onchange} />
        </Fragment>
    )
}

export default Input
