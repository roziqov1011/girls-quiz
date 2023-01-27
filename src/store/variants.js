const initialState = [

]

const Variants = (state=initialState, action) =>{
    switch (action.type) {
        case 'ADD':
            let item = action.payload
            state.push(item)
            return state
        default:
            return state
            break;
    }
}

export default Variants