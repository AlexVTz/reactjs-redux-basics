const mathObject = {
    result: 1,
    some: []
}

const mathReducer = (state = mathObject, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                some: [...state.some, action.payload]
            };
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result + action.payload,
                some: [...state.some, action.payload]
            };
            break;
    }
    return state;
}

export default mathReducer;