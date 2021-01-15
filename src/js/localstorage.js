// const theme = {
//   theme: 'dark',
//   fontSize: 14,
// };

// localStorage.setItem('theme', JSON.stringify(theme));
// const value = localStorage.getItem('theme');
// console.log(value);

// const pasedTheme = JSON.parse(value);
// console.log(pasedTheme.fontSize);

// localStorage.removeItem('theme');
const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};
refs.form.addEventListener('submit', handleSubmit);
// console.log(refs.textarea);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-message');
  event.currentTarget.reset();
}

refs.textarea.addEventListener('input', handleTextInput);

function handleTextInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem('feedback-message', message);
}

function popMessage() {
  const savedMessage = localStorage.getItem('feedback-message');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
