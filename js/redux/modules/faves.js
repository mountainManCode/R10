import { queryFaves } from "../../config/models";

// ACTIONS

const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES = "GET_FAVES";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";

// ACTION CREATORS

const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});
const getFavesError = error => ({ Type: GET_FAVES_ERROR, payload: error });

// ASYNC ACTION CREATOR
export const fetchFaves = () => dispatch => {
  dispatch(getFavesLoading());
  const faves = queryFaves();
  dispatch(getFaves(faves));
};

// REDUCER
export default (
  state = {
    isLoading: false,
    faves: {},
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_FAVES: {
      return {
        ...state,
        faves: action.payload,
        isLoading: false,
        error: "" // if previously there was an error, clear the error
      };
    }
    case GET_FAVES_ERROR: {
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
