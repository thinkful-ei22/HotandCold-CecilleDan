const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});


const GUESS_FEEDBACK = 'GUESS_FEEDBACK';
export const feedback = (feedback) => ({
  type: GUESS_FEEDBACK,
  feedback
})
