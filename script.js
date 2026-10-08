function startLearning() {
    document.getElementById("subjects").scrollIntoView();
}

function showMessage(subject) {
    alert("Welcome to " + subject + " Learning!");
}

function checkQuiz() {

    let answer = document.querySelector(
        'input[name="q1"]:checked'
    );

    let result = document.getElementById("result");

    if (answer == null) {
        result.innerHTML = "Please select an answer.";
    }
    else if (answer.value == "correct") {
        result.innerHTML = "🎉 Correct Answer! Well Done!";
    }
    else {
        result.innerHTML = "❌ Wrong Answer. Try Again!";
    }
}

function submitFeedback(event) {

    event.preventDefault();

    document.getElementById("feedbackMessage").innerHTML =
        "✅ Thank you for your valuable feedback!";
}