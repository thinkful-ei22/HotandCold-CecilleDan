import action from '../actions/actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

// this.state = {
//   guesses: [],
//   feedback: 'Make your guess!',
//   auralStatus: '',
//   correctAnswer: Math.round(Math.random() * 100) + 1
// };

export const guessReducer = (state=initialState, action) => {
    if (action.type === 'MAKE_GUESS') {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess],
      })
    } else if (action.type === 'GUESS_FEEDBACK') {
      return Object.assign({}, state, {
        feedback: action.feedback
      })
    }

    return state;
};
