const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const setName = (event) => {
     nameOutput.textContent = event.target.value;
}

const setDefault = (event) => {
     if (event.target.value === '') nameOutput.textContent = 'Anonymous';
}

inputName.addEventListener('input', setName);
inputName.addEventListener('blur', setDefault);