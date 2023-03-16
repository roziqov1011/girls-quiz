const initialState = [
    {
        fullName: '',
        phone:'',
        category: '',
        apiCoursId: '',
        result: undefined,
        logic: undefined,
        time: 0,
        findUser: false,
        timeFinish: false
    }
]

const un = {
    fullName: '',
    phone:'',
    category: '',
    apiCoursId: '',
    result: undefined,
    logic: undefined,
    time: 0,
    findUser: false,
    timeFinish: false
}

const Variants = (state=initialState, action) =>{
    let item = action.payload
    switch (action.type) {
        case 'INFO':
            state[0].fullName = item.fullName
            state[0].phone = item.phone
            return state;
        case 'FIND':
            state[0].findUser = item.findUser
            return state;
        
        case 'CATEGORY':
            state[0]  = un
            state[0].category = item.category
            state[0].time = item.time
            return state;
        case 'RESULT':
            state[0].result = item.result
            return state;
        case 'COURSEID':
            state[0].apiCoursId = item.courseId
            return state;
        case 'LOGIC':
            state[0].logic = item.logic
            return state
        default:
            return state
            break;
    }
}

export default Variants