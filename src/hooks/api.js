import { useCallback, useReducer } from "react";

const API_URL = "https://hacker-news.firebaseio.com/v0/";

export const apiFetch = async (endpoint, options) => {
  const response = await fetch(API_URL + endpoint, {});
  if (response.status === 204) {
    return null;
  }
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else {
      console.log(responseData)
    throw responseData;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, data: null, loading: true, errors: null };
    case "ERRORS":
      return { ...state, errors: action.errors, loading: false };
    case "DATA":
      return { ...state, data: action.data, loading: false, errors: null };
    default:
      return state;
  }
};

export const useApi = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    errors: null,
  });
  const doFetch = useCallback(async (endpoint) => {
    dispatch({ type: "START_LOADING" });
    try {
      const data = await apiFetch(endpoint);
      if (data) {
        dispatch({ type: "DATA", data });
        return data;
      }
    } catch (e) {
        console.log(e)
      dispatch({
        type: "ERRORS",
        errors: e.error,
      });
      throw e;
    }
  }, []);

  return {
    errors: state.errors,
    loading: state.loading,
    data: state.data,
    setData: function (data) {
      dispatch({ type: "DATA", data });
    },
    doFetch,
  };
};
