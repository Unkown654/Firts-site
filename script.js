let passwordAttempts = 0;

const nextBtn = document.getElementById('nextBtn');
if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        const nameInput = document.getElementById('nameInput');
        const errorMsg = document.getElementById('errorMsg');
        const enteredName = nameInput.value.trim();

        if (enteredName === 'Radhika') {
            errorMsg.textContent = '';
            window.location.href = 'password.html';
        } else {
            errorMsg.textContent = 'Please enter only your good name';
        }
    });
}

const passwordNextBtn = document.getElementById('passwordNextBtn');
if (passwordNextBtn) {
    passwordNextBtn.addEventListener('click', function() {
        const passwordInput = document.getElementById('passwordInput');
        const passwordErrorMsg = document.getElementById('passwordErrorMsg');
        const enteredPassword = passwordInput.value.trim();

        if (passwordAttempts >= 5) {
            passwordErrorMsg.textContent = 'Wrong password, try again later';
            this.disabled = true;
            passwordInput.disabled = true;
            return;
        }

        if (enteredPassword === 'Aniket') {
            passwordErrorMsg.textContent = '';
            window.location.href = 'after-password.html';
        } else {
            passwordAttempts++;
            if (passwordAttempts === 1) {
                passwordErrorMsg.textContent = 'Wrong password, please try again';
                passwordInput.value = '';
            } else if (passwordAttempts === 5) {
                passwordErrorMsg.textContent = 'Wrong password, try again later';
                this.disabled = true;
                passwordInput.disabled = true;
            }
        }
    });
}
