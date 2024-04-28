$(document).ready(function() {
    $(".copy-to-clipboard").click(function() {
        let campo = $("#user_password");
        campo.select();
        document.execCommand("copy");
    });

    $('#btn-generate-password').click(function() {
        const passwordSize = 10;
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
        let password = "";
        password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
        password += getRandomChar("0123456789");
        password += getRandomChar("!@#$%^&*()-_=+");
        for (let i = 0; i < passwordSize - 4; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        password = shuffleString(password);
        document.getElementById('user_password').value = password;
    })

    $('.icon-eye-password').click(function() {
        const passwordField = document.getElementById('user_password');
        const iconElement = event.target;
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            iconElement.classList.remove('fa-eye');
            iconElement.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            iconElement.classList.remove('fa-eye-slash');
            iconElement.classList.add('fa-eye');
        }
    });

    function getRandomChar(characters) {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function shuffleString(str) {
        let shuffled = '';
        str = str.split('');
        while (str.length > 0) {
            shuffled += str.splice(Math.floor(Math.random() * str.length), 1);
        }
        return shuffled;
    }
})
