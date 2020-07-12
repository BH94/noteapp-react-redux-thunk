import { handleActions } from "redux-actions";

import axios from "axios";

const GET_WEATHER_PENDING = "GET_WEATHER_PENDING";
const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

function getAPI() {
  return axios.get(
    "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=e75a0a68adc50371c5898d8d43931062"
  );
}

export const getWeather = () => async (dispatch) => {
  dispatch({ type: GET_WEATHER_PENDING });

  try {
    const response = await getAPI();
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_WEATHER_FAILURE,
      payload: err,
    });
    throw err;
  }
};

const initialState = {
  loading: false,
  error: false,
  data: {
    area: "",
    temp: 0,
    weather: "",
  },
};

export default handleActions(
  {
    [GET_WEATHER_PENDING]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    [GET_WEATHER_SUCCESS]: (state, action) => {
      const area = action.payload.name;
      const temp = action.payload.main.temp;
      const weather = action.payload.weather[0].main;

      return {
        ...state,
        loading: false,
        data: {
          area: area,
          temp: temp,
          weather: weather,
        },
      };
    },
    [GET_WEATHER_FAILURE]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
  initialState
);
