export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
};

export const handleNumber = (value, state) => {
    if(!state.currentValue || state.currentValue === "0") {
        state.currentValue = value;
    } else
        state.currentValue = state.currentValue.toString() + value;
    return state;

};

const handleEqual = (state) => {
    const {currentValue, previousValue, operator} = state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    let newValue = currentValue;
    switch(state.operator) {
        case "+":
            newValue = previous + current;
            break;
        case "-":
            newValue = previous - current;
            break;
        case "*":
            newValue = previous * current;
            break;
        case "/":
            newValue = previous / current;
            break;
    }
    state.currentValue = newValue;
    state.operator = null;
    state.previousValue = null;
    return state;
};

const calculator = (type, value, state) => {
    switch (type) {
        case "number":
            return handleNumber(value, state);
        case "clear":
            return initialState
        case "posneg":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`,
            };
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`,
            };
        case "operator":
            state.previousValue = state.currentValue;
            state.operator = value;
            state.currentValue= "0";
            return state;
        case "equal":
            return handleEqual(state);
        default:
            return state;
    }
};
export default calculator;