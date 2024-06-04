const questions = [
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your favorite book?",
    "What is your favorite sport?",
    "What is your favorite hobby?",
    "What is your favorite animal?",
    "What is your favorite city?",
    "What is your favorite season?",
    "What is your favorite music genre?"
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
    
    document.getElementById('nextButton').addEventListener('click', function() {
        const answer = document.getElementById('answerInput').value;
        if (answer) {
            // Store or process the answer if needed
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                document.getElementById('questionContainer').style.display = 'none';
                document.getElementById('surveyCompletionMessage').style.display = 'block';
            }
        }
    });
});

function displayQuestion() {
    document.getElementById('questionText').textContent = questions[currentQuestionIndex];
    document.getElementById('answerInput').value = '';
}
