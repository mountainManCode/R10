import { formatDataObject } from "../../config/helpers";

// ACTIONS

const GET_SPEAKER_LOADING = "GET_SPEAKER_LOADING";
const GET_SPEAKER = "GET_SPEAKER";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";

// ACTION CREATORS

const getSpeakerLoading = () => ({ type: GET_SPEAKER_LOADING });
const getSpeaker = speakerData => ({
  type: GET_SPEAKER,
  payload: speakerData
});
const getSpeakerError = error => ({ Type: GET_SPEAKER_ERROR, payload: error });

const SESSION_URL = "https://r10app-95fea.firebaseio.com/speakers.json";

// ASYNC ACTION CREATOR
export const fetchSpeaker = speakerId => dispatch => {
  dispatch(getSpeakerLoading());
  fetch(`${SESSION_URL}`)
    .then(res => res.json())
    .then(speakerData => dispatch(getSpeaker(formatDataObject(speakerData))))
    .catch(error => dispatch(getSpeakerError(error)));
};

// REDUCER
export default (
  state = {
    isLoading: false,
    speakerData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_SPEAKER: {
      return {
        ...state,
        speakerData: action.payload,
        isLoading: false,
        error: action.payload // if previously there was an error, clear the error
      };
    }
    case GET_SPEAKER_ERROR: {
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
