// =========================
// GET HTML ELEMENTS
// =========================

const loveForm = document.getElementById("loveForm");

const firstNameInput =
    document.getElementById("firstName");

const secondNameInput =
    document.getElementById("secondName");

const errorMessage =
    document.getElementById("errorMessage");

const result =
    document.getElementById("result");

const coupleNames =
    document.getElementById("coupleNames");

const scoreNumber =
    document.getElementById("scoreNumber");

const scoreMessage =
    document.getElementById("scoreMessage");

const emotionalBar =
    document.getElementById("emotionalBar");

const trustBar =
    document.getElementById("trustBar");

const funBar =
    document.getElementById("funBar");

const emotionalValue =
    document.getElementById("emotionalValue");

const trustValue =
    document.getElementById("trustValue");

const funValue =
    document.getElementById("funValue");

const heartContainer =
    document.getElementById("heartContainer");


// =========================
// CREATE RANDOM SCORE
// =========================

function getScore() {

    // Generate a random number between 50 and 100.
    const overall =
        Math.floor(Math.random() * 51) + 50;

    // Generate category scores.
    const emotional =
        Math.floor(Math.random() * 51) + 50;

    const trust =
        Math.floor(Math.random() * 51) + 50;

    const fun =
        Math.floor(Math.random() * 51) + 50;

    return {
        overall,
        emotional,
        trust,
        fun
    };
}


// =========================
// GET LOVE MESSAGE
// =========================

function getScoreMessage(score) {

    if (score >= 90) {
        return "Soulmates ❤️";
    }

    if (score >= 80) {
        return "Amazing Love 💕";
    }

    if (score >= 70) {
        return "Good Match 💗";
    }

    if (score >= 60) {
        return "There is Potential 💞";
    }

    return "Keep Trying 💕";
}


// =========================
// SHOW GAUGE
// =========================

function showGauge(score) {

    let currentScore = 0;

    const needle =
        document.querySelector(".needle");

    // Reset needle before every calculation.
    needle.style.transform =
        "rotate(-35deg)";

    scoreNumber.textContent = "0";

    // Count from 0 to the score.
    const counter = setInterval(() => {

        currentScore++;

        scoreNumber.textContent =
            currentScore;

        if (currentScore >= score) {

            clearInterval(counter);
        }

    }, 20);


    // Move the needle according to score.
    const rotation =
        -35 + ((score - 50) / 50) * 70;

    setTimeout(() => {

        needle.style.transform =
            `rotate(${rotation}deg)`;

    }, 100);
}


// =========================
// SHOW CATEGORY SCORES
// =========================

function showCategoryScores(scores) {

    // Reset bars.
    emotionalBar.style.width = "0%";
    trustBar.style.width = "0%";
    funBar.style.width = "0%";

    // Show numbers.
    emotionalValue.textContent =
        `${scores.emotional}%`;

    trustValue.textContent =
        `${scores.trust}%`;

    funValue.textContent =
        `${scores.fun}%`;


    // Animate bars.
    setTimeout(() => {

        emotionalBar.style.width =
            `${scores.emotional}%`;

        trustBar.style.width =
            `${scores.trust}%`;

        funBar.style.width =
            `${scores.fun}%`;

    }, 100);
}


// =========================
// POP HEARTS UPWARD
// =========================

function blowHearts() {

    // Number of hearts created per click.
    const heartCount = 25;

    for (let i = 0; i < heartCount; i++) {

        const heart =
            document.createElement("span");

        heart.classList.add(
            "floating-heart"
        );

        heart.textContent = "♥";


        // Random horizontal position.
        heart.style.left =
            `${Math.random() * 100}%`;


        // Random heart size.
        heart.style.fontSize =
            `${15 + Math.random() * 25}px`;


        // Different animation speed.
        heart.style.animationDuration =
            `${2 + Math.random() * 2}s`;


        // Small delay so hearts don't appear together.
        heart.style.animationDelay =
            `${Math.random() * 0.5}s`;


        heartContainer.appendChild(heart);


        // Remove heart after animation.
        setTimeout(() => {

            heart.remove();

        }, 4500);
    }
}


// =========================
// CALCULATE LOVE SCORE
// =========================

loveForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh.
        event.preventDefault();


        const firstName =
            firstNameInput.value.trim();

        const secondName =
            secondNameInput.value.trim();


        // Check if names are empty.
        if (!firstName || !secondName) {

            errorMessage.textContent =
                "Please enter both names ❤️";

            return;
        }


        // Clear error.
        errorMessage.textContent = "";


        // Get a NEW random score.
        const scores = getScore();


        // Display names.
        coupleNames.textContent =
            `${firstName} + ${secondName}`;


        // Display result.
        result.classList.remove("hidden");


        // Display message.
        scoreMessage.textContent =
            getScoreMessage(scores.overall);


        // Animate gauge.
        showGauge(scores.overall);


        // Animate category bars.
        showCategoryScores(scores);


        // POP HEARTS UPWARD.
        blowHearts();
    }
);