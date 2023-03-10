import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{operation}</button>
}