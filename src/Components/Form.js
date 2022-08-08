import React, { useState } from "react"
import stateData from "../Data/state"
import "../Style/Components/Form.css"
import { addNewEmployee } from "../Features/employeeList"
import { useDispatch } from "react-redux"
import { Modal } from "react_modular_modal"
import Input from "./Input"

/**
 * Component for generate form
 * @component
 * @returns {object} form for add new employee
 */
const Form = () => {
    const dispatch = useDispatch()
    /**
     * useState for modal status
     */
    const [modalOpenCreate, setModalOpenCreate] = useState(false)
    const [modalOpenError, setModalOpenError] = useState(false)

    /**
     * Action for toggle modal visibility
     * @returns void
     */
    const openModalCreate = () => setModalOpenCreate(true)
    const closeModalCreate = () => setModalOpenCreate(false)
    const openModalError = () => setModalOpenError(true)
    const closeModalError = () => setModalOpenError(false)

    /**
     * useState for new employee
     */
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    })

    /**
     * function to implement newEmployee
     * @param {string} key
     * @param {string} value
     */
    function setEmployee(key, value) {
        setNewEmployee({
            ...newEmployee,
            [key]: value,
        })
    }

    /**
     * handle change on form input
     * @param {object} e
     */
    function handleChange(e) {
        e.preventDefault()
        switch (e.target.id) {
            case "first-name":
                setEmployee("firstName", e.target.value)
                break
            case "last-name":
                setEmployee("lastName", e.target.value)
                break
            case "date-of-birth":
                setEmployee("dateOfBirth", e.target.value)
                break
            case "start-date":
                setEmployee("startDate", e.target.value)
                break
            case "department":
                setEmployee("department", e.target.value)
                break
            case "street":
                setEmployee("street", e.target.value)
                break
            case "city":
                setEmployee("city", e.target.value)
                break
            case "state":
                setEmployee("state", e.target.value)
                break
            case "zip-code":
                setEmployee("zipCode", e.target.value)
                break
            default:
                console.error(new Error("Whoops, something bad happened"))
        }
    }

    /**
     * Handlesubmit of form
     * @param {object} e
     */
    function handleSubmit(e) {
        e.preventDefault()
        console.log()
        if (newEmployee.firstName && newEmployee.lastName) {
            dispatch(addNewEmployee(newEmployee))
            openModalCreate()
        } else {
            openModalError()
        }
    }

    return (
        <div className="Form">
            <h2 className="Form__h2">Create Employee</h2>
            <form className="Form__form" action="#" id="create-employee">
                <fieldset className="Form__fieldset">
                    <legend>Information</legend>

                    <Input
                        id={"first-name"}
                        desc={"First Name"}
                        type={"text"}
                        onchange={handleChange}
                    />

                    <Input
                        id={"last-name"}
                        desc={"Last Name"}
                        type={"text"}
                        onchange={handleChange}
                    />

                    <Input
                        id={"date-of-birth"}
                        desc={"Date of Birth"}
                        type={"date"}
                        onchange={handleChange}
                    />

                    <Input
                        id={"start-date"}
                        desc={"Start Date"}
                        type={"date"}
                        onchange={handleChange}
                    />

                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        onChange={handleChange}
                    >
                        <option>Choose option ...</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </fieldset>
                <fieldset className="Form__fieldset">
                    <legend>Address</legend>

                    <Input
                        id={"street"}
                        desc={"Street"}
                        type={"text"}
                        onchange={handleChange}
                    />

                    <Input
                        id={"city"}
                        desc={"City"}
                        type={"text"}
                        onchange={handleChange}
                    />

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

                    <Input
                        id={"zip-code"}
                        desc={"Zip Code"}
                        type={"number"}
                        onchange={handleChange}
                    />
                </fieldset>
            </form>
            <span className="Form__span">
                <button className="Form__span__button" onClick={handleSubmit}>
                    Save
                </button>
            </span>
            {modalOpenCreate && (
                <Modal text="Employee created" closeAction={closeModalCreate} />
            )}
            {modalOpenError && (
                <Modal
                    text="Please fill First and Last name field"
                    closeAction={closeModalError}
                />
            )}
        </div>
    )
}

export default Form
