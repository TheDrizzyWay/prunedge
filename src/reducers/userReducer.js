const initialState = {
    user: {},
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
               ...state,
               error: null,
               user: action.payload
            };
        case 'GET_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
