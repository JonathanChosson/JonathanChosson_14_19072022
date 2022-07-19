import React from 'react'
import '../Style/Components/Form.css'

const Form = () => {
    return (
        <div className="Form">
            <h2 className="Form__h2">Create Employee</h2>
            <form className="Form__form" action="#" id="create-employee">
                <fieldset className="Form__fieldset">
                    <legend>Information</legend>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </fieldset>
                <fieldset className="Form__fieldset">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>
            </form>
            <span className="Form__span">
                <button className="Form__span__button">Save</button>
            </span>
        </div>
    )
}

export default Form
