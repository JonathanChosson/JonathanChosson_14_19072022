import produce from "immer"

const initialState = {
    data: [],
}

const ADDEMPLOYEE = "addEmployee"

/**
 * Action creator to add employee
 * @param {object} employee
 * @returns void
 */
export const addNewEmployee = (employee) => ({
    type: ADDEMPLOYEE,
    payload: employee,
})

/**
 * Reducer for redux store
 * @param {object} state
 * @param {function} action
 * @returns
 */
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
