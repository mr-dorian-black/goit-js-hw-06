const inputName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const setName = (event) => {
     if (event.target.value === '') {
          nameOutput.textContent = 'Anonymous';
     }
     else {
          nameOutput.textContent = event.target.value;
     }

}

inputName.addEventListener('input', setName);
