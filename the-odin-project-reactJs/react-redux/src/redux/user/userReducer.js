import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./userTypes";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        payload: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
