const input = document.querySelector('#validation-input');

const checkLength = (event) => {
     let target = event.target;
     if (target.value.length === Number(target.dataset.length)) {
          if (!target.classList.contains('valid')) {
               target.classList.add('valid');
               if (target.classList.contains('invalid')) target.classList.remove('invalid');
          }
     }
     else {
          if (!target.classList.contains('invalid')) {
               target.classList.add('invalid');
               if (target.classList.contains('valid')) target.classList.remove('valid');
          }
     }
}

input.addEventListener('blur', checkLength);
