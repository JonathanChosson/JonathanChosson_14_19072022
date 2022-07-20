import produce from 'immer'

// import { selectLogin } from '../utils/selectors'

const initialState = {
    data: [],
}

const ADDEMPLOYEE = 'addEmployee'

// Add employee
export const addNewEmployee = (employee) => ({
    type: ADDEMPLOYEE,
    payload: employee,
})

export default function employeeReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADDEMPLOYEE: {
                draft.data.push(action.payload)
                return
            }
            default:
                return
        }
    })
}
