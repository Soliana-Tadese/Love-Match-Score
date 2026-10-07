

const loveForm = document.getElementById("loveForm");

const firstNameInput =
    document.getElementById("YourName");

const secondNameInput =
    document.getElementById("Your Lover's Name");

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


function getScore() {

   
    const overall =
        Math.floor(Math.random() * 51) + 50;

   
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



function showGauge(score) {

    let currentScore = 0;

    const needle =
        document.querySelector(".needle");

  
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


 
    const rotation =
        -35 + ((score - 50) / 50) * 70;

    setTimeout(() => {

        needle.style.transform =
            `rotate(${rotation}deg)`;

    }, 100);
}




function showCategoryScores(scores) {

   
    emotionalBar.style.width = "0%";
    trustBar.style.width = "0%";
    funBar.style.width = "0%";

    
    emotionalValue.textContent =
        `${scores.emotional}%`;

    trustValue.textContent =
        `${scores.trust}%`;

    funValue.textContent =
        `${scores.fun}%`;


   
    setTimeout(() => {

        emotionalBar.style.width =
            `${scores.emotional}%`;

        trustBar.style.width =
            `${scores.trust}%`;

        funBar.style.width =
            `${scores.fun}%`;

    }, 100);
}




function blowHearts() {

   
    const heartCount = 25;

    for (let i = 0; i < heartCount; i++) {

        const heart =
            document.createElement("span");

        heart.classList.add(
            "floating-heart"
        );

        heart.textContent = "♥";


        heart.style.left =
            `${Math.random() * 100}%`;


      
        heart.style.fontSize =
            `${15 + Math.random() * 25}px`;


        heart.style.animationDuration =
            `${2 + Math.random() * 2}s`;


      
        heart.style.animationDelay =
            `${Math.random() * 0.5}s`;


        heartContainer.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 4500);
    }
}




loveForm.addEventListener(
    "submit",
    function(event) {

        
        event.preventDefault();


        const firstName =
            firstNameInput.value.trim();

        const secondName =
            secondNameInput.value.trim();


       
        if (!firstName || !secondName) {

            errorMessage.textContent =
                "Please enter both names ❤️";

            return;
        }


        
        errorMessage.textContent = "";


        const scores = getScore();


       
        coupleNames.textContent =
            `${firstName} + ${secondName}`;


       
        result.classList.remove("hidden");


     
        scoreMessage.textContent =
            getScoreMessage(scores.overall);


      
        showGauge(scores.overall);


        showCategoryScores(scores);


        blowHearts();
    }
);
