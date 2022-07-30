import React from "react"
import { useSelector } from "react-redux"
import Header from "../Components/Header"
import Route from "../Components/Route"
import "../Style/Pages/EmployeeList.css"
import { selectEmployee } from "../Utils/selector"
import DataTables from "datatables-plugin-react"
import { exampleLabels } from "../Data/exampleLabel.js"

const EmployeeList = () => {
    const employeeTable = useSelector(selectEmployee)

    return (
        <div className="EmployeeList">
            <Header />
            <Route />
            {employeeTable?.length >= 1 ? (
                <DataTables labels={exampleLabels} data={[...employeeTable]} />
            ) : (
                "Please create an employee to see their informations"
            )}
        </div>
    )
}

export default EmployeeList
