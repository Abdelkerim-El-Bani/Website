document.getElementById('submitButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    if (name) {
        localStorage.setItem('userName', name); // Save the name to localStorage
        window.location.href = 'survey.html'; // Redirect to survey
    } else {
        document.getElementById('thankYouMessage').style.display = 'none';
    }
});
