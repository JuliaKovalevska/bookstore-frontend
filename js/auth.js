$(document).ready(function() {
    const BASE_URL = 'http://127.0.0.1:8000/api/';

    $('#register-form').on('submit', function(event) {
        event.preventDefault();

        const registerData = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            password2: $('#password2').val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val()
        };

        $.ajax({
            url: BASE_URL + 'auth/register/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(registerData),
            success: function(response) {
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            },
            error: function(err) {
                console.error('Registration error:', err);
                alert('Registration failed: ' + JSON.stringify(err.responseJSON));
            }
        });
    });

    $('#login-form').on('submit', function(event) {
        event.preventDefault();

        const loginData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: BASE_URL + 'token/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function(response) {
                localStorage.setItem('accessToken', response.access);
                localStorage.setItem('refreshToken', response.refresh);

                $.ajax({
                    url: BASE_URL + 'auth/me/',
                    type: 'GET',
                    headers: { 'Authorization': 'Bearer ' + response.access },
                    success: function(userResponse) {
                        localStorage.setItem('username', userResponse.username);

                        alert('Login successful!');
                        window.location.href = 'index.html';
                    },
                    error: function() {
                        alert('Could not fetch user profile.');
                        window.location.href = 'index.html';
                    }
                });
            },
            error: function(err) {
                console.error('Login error:', err);
                alert('Login failed: Invalid credentials.');
            }
        });
    });
});