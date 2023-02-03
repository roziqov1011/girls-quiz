const initialState = [
    {
        fullName: '',
        phone:'',
        category: '',
        result:undefined
    }
]

const Variants = (state=initialState, action) =>{
    let item = action.payload
    switch (action.type) {
        case 'INFO':
            state[0].fullName = item.fullName
            state[0].phone = item.phone
            return state;
        
        case 'CATEGORY':
            state[0].category = item.category
            return state
        case 'RESULT':
            state[0].result = item.result
            return state
        default:
            return state
            break;
    }
}

export default Variants