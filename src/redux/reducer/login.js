const initialState = {
  data: {},
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, isLoading: true };
    case "LOGIN_FULFILLED":
      return { ...state, isLoading: false, data: action.payload.data };
    case "LOGIN_REJECTED":
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default userReducer;
