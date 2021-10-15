import * as t from "../types";

const initialState = [
  {
    id: 1,
    title: "Learn Reactin 5 mins",
    status: "inprogress",
    progressPercentage: 50,
    author: "Precious Adeyinka",
    duration: "2 hours",
    studentsTaken: 321,
    assignments: 5,
    lessons: 21,
    poster: "image_url_here",
  },
];

const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_LESSONS:
      if (action.payload !== undefined) {
        // return {...state, data: [...action.payload]}
        return [...state, ...action.payload];
      } else {
        return state;
      }
      break;
    case t.UPDATE_LESSON:
      if (action.payload !== undefined && Object.keys(state).length !== 0) {
        let target = action.payload;
        // filter the state for the payload match, based on id
        let source = state.filter((item) => item.id === target.id);
        // check if the payload exists, don't add it if it does
        if (source.length > 0) {
          return [...state];
        } else {
          return [action.payload, ...state];
        }
      } else {
        return [...state, action.payload];
      }
      break;
    default:
      return [...state];
      break;
  }
};

export default lessonsReducer;
