// import { formatSessionData } from "../../config/helpers";

// ACTIONS

const GET_SESSION_LOADING = "GET_SESSION_LOADING";
const GET_SESSION = "GET_SESSION";
const GET_SESSION_ERROR = "GET_SESSION_ERROR";

// ACTION CREATORS

const getSessionLoading = () => ({ type: GET_SESSION_LOADING });
const getSession = sessionData => ({
  type: GET_SESSION,
  payload: sessionData
});
const getSessionError = error => ({ Type: GET_SESSION_ERROR, payload: error });

const SESSION_URL = "https://r10app-95fea.firebaseio.com/sessions.json";

// ASYNC ACTION CREATOR
export const fetchSession = () => dispatch => {
  dispatch(getSessionLoading());
  fetch(SESSION_URL)
    .then(res => res.json())
    .then(sessionData => dispatch(getSession(sessionData)))
    .catch(error => dispatch(getSessionError(error)));
};

// REDUCER
export default (
  state = {
    isLoading: false,
    sessionData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SESSION_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SESSION: {
      return {
        ...state,
        sessionData: action.payload,
        isLoading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_SESSION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload // if previously there was an error, clear the error
      };
    }
    default:
      return state;
  }
};
