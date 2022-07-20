import React, { useState } from 'react'
import stateData from '../Data/state'
import '../Style/Components/Form.css'

const Form = () => {
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    })

    function setEmployee(key, value) {
        setNewEmployee({
            ...newEmployee,
            [key]: value,
        })
    }

    function handleChange(e) {
        e.preventDefault()
        switch (e.target.id) {
            case 'first-name':
                setEmployee('firstName', e.target.value)
                break
            case 'last-name':
                setEmployee('lastName', e.target.value)
                break
            case 'date-of-birth':
                setEmployee('dateOfBirth', e.target.value)
                break
            case 'start-date':
                setEmployee('startDate', e.target.value)
                break
            case 'department':
                setEmployee('department', e.target.value)
                break
            case 'street':
                setEmployee('street', e.target.value)
                break
            case 'city':
                setEmployee('city', e.target.value)
                break
            case 'state':
                setEmployee('state', e.target.value)
                break
            case 'zip-code':
                setEmployee('zipCode', e.target.value)
                break
            default:
                console.error(new Error('Whoops, something bad happened'))
        }
    }

    return (
        <div className="Form">
            <h2 className="Form__h2">Create Employee</h2>
            <form className="Form__form" action="#" id="create-employee">
                <fieldset className="Form__fieldset">
                    <legend>Information</legend>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        onChange={handleChange}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={handleChange} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input
                        id="date-of-birth"
                        type="date"
                        onChange={handleChange}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <input
                        id="start-date"
                        type="date"
                        onChange={handleChange}
                    />

                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        onChange={handleChange}
                    >
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
                    <input id="street" type="text" onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <select
                        name="state"
                        id="state"
                        size={5}
                        onChange={handleChange}
                    >
                        {stateData.map((state) => {
                            return (
                                <option key={state.name} value={state.name}>
                                    {state.name}
                                </option>
                            )
                        })}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input
                        id="zip-code"
                        type="number"
                        onChange={handleChange}
                    />
                </fieldset>
            </form>
            <span className="Form__span">
                <button className="Form__span__button">Save</button>
            </span>
        </div>
    )
}

export default Form
