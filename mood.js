const emoji = document.querySelector('#emoji');
const buttons = document.querySelector('#emotions');

const emoReducer = (state = { emoji: "(ᴗ˳ᴗ)" }, action) => {
  if (action.type === 'CHANGE_EMOJI') {
    return { ...state, emoji: action.emoji };
  }
  return state;
}

const currentEmotion = Redux.createStore(emoReducer);

buttons.addEventListener('click', e => {
  if (e.target.dataset.emoji) {
    currentEmotion.dispatch({
      type: "CHANGE_EMOJI",
      emoji: e.target.dataset.emoji
    });
  }
});

currentEmotion.subscribe(() => emoji.innerText = currentEmotion.getState().emoji);