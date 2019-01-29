import { PREV_SLIDE, NEXT_SLIDE, RESET_SLIDE } from './types';

export const goToNextSlide = (
  currentIndex,
  translateValue,
  listLength,
  slideWidth,
) => async dispatch => {
  try {
    if (currentIndex === listLength - 1) {
      return dispatch({
        type: RESET_SLIDE,
        payload: { currentIndex: 0, translateValue: 0 },
      });
    }

    dispatch({
      type: NEXT_SLIDE,
      payload: {
        currentIndex: currentIndex + 1,
        translateValue: translateValue + -slideWidth,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
export const goToPrevSlide = (
  currentIndex,
  listLength,
  slideWidth,
) => async dispatch => {
  try {
    dispatch({ type: PREV_SLIDE, payload: currentIndex - 1 });
  } catch (e) {
    console.log(e);
  }
};
