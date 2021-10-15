import * as t from "../types";

export const setLessons = (lessons) => {
  return {
    type: t.SET_LESSONS,
    payload: lessons,
  };
};

export const updateLesson = (lesson) => {
  return {
    type: t.UPDATE_LESSON,
    payload: lesson,
  };
};
