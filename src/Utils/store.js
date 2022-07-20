import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../Features/employeeList'

const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
})

export default store
