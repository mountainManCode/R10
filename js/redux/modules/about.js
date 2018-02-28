// ACTIONS

const GET_DATA_LOADING = "GET_DATA_LOADING";
const GET_DATA = "GET_DATA";
const GET_DATA_ERROR = "GET_DATA_ERROR";

// ACTION CREATORS

const getDataLoading = () => ({ type: GET_DATA_LOADING });
const getData = codeOfConductData => ({
  type: GET_DATA,
  payload: codeOfConductData
});
const getDataError = error => ({ Type: GET_DATA_ERROR, payload: error });

const CONDUCT_URL = "https://r10app-95fea.firebaseio.com/code_of_conduct.json";

// ASYNC ACTION CREATOR
export const fetchCodeOfConduct = () => dispatch => {
  dispatch(getDataLoading());
  fetch(CONDUCT_URL)
    .then(res => res.json())
    .then(data => dispatch(getData(data)))
    .catch(error => dispatch(getDataError(error)));
};

// REDUCER
export default (
  state = {
    isLoading: false,
    codeOfConductData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_DATA_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_DATA: {
      return {
        ...state,
        codeOfConductData: action.payload,
        isLoading: false,
        error: action.payload // if previously there was an error, clear the error
      };
    }
    case GET_DATA_ERROR: {
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
