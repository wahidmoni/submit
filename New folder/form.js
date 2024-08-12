document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const fathersName = document.getElementById('fathersName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const courseName = document.getElementById('courseName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;

    const templateParams = {
        fullName: fullName,
        fathersName: fathersName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        courseName: courseName,
        gender: gender,
        address: address
    };

    emailjs.send('service_d81n0gu', 'template_wiujzcm', templateParams)
        .then(function(response) {
            alert('Registration Successful!', response.status, response.text);
        }, function(error) {
            alert('Failed to Register. Please try again.', error);
        });
});