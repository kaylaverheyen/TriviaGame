//questions 
var questions = [
    {
        text: "Which of the following surnames does Dorothy's character have in the classic film The Wizard of Oz?",
        options: ["Denton", "Gale", "Smith", "Garland"],
        answer: 1 //index of the correct answer
    },
    {
        text: "In what year did the voluntary MPAA film rating system, which rates a film's appropriateness for certain audiences based on its content, take effect?",
        options: ["1943", "1961", "1952", "1968"],
        answer: 3 //index of the correct answer
    },
    {
        text: "Which of the following individuals has not won an Academy Award?",
        options: ["Ed Harris", "Sally Field", "Sidney Poitier", "Kathy Bates"],
        answer: 0 //index of the correct answer
    },
    {
        text: "What film had the highest domestic total gross at the U.S. box office in 2017?",
        options: ["Star Wars: The Last Jedi ", "Coco", "Thor: Ragnarok", "Wonder Woman"],
        answer: 0 //index of the correct answer
    },
    {
        text: "Which of the following films is the only one that is not primarily set in Paris, France?",
        options: ["Amelie", "Hugo", "Ratatouille", "Pan's Labyrinth"],
        answer: 3 //index of the correct answer
    }
];
//variables
var timer;
var questionIndex = 0;
var totalGameTime = 90;
var numberCorrect = 0;
var numberIncorrect = 0;

$("#start-btn").on("click", function () {
    $(this).hide();

    startGame();
});
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("questions");
var results = document.getElementById("results");

//start the game function:
function startGame() {
    //hide the results and show the questions ??empty??
    $(".results").hide();
    $(".questions").show();

    //display the timer where the start btn is
    $(".game-time").text(totalGameTime);
    console.log(totalGameTime);
    //start timer
    startTimer();
    //display questions!!!!
    displayQuestions();
    //set the score???(numberCorrect, numberIncorrect)

}

function startTimer() {
    timer = setInterval(function () {
        totalGameTime--;
        $(".game-time").text(totalGameTime);
        if (totalGameTime === 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    $(".questions").hide();
    //message

    //view results on webpage
    $(".results").show();

    numberCorrect = 0;
    numberIncorrect = 0;
    totalGameTime = 90;
    questionIndex = 0;
    $(".start-btn").show();

}


function displayQuestions() {

    var output = [];
    questions.forEach(
        (currentQ, questionNum) => {
            var options = [];
            for (value in currentQ.options) {
                options.push(
                    `<label>
                    <input type="radio" name="text${questionNum}" value="${value}">
                    ${value} :
                    ${currentQ.options[value]}
                  </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQ.text} </div>
                <div class="options"> ${options.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join("");
}



// function checkAns() {
//     if ($("input[name=option]:checked").val() == questions[questionIndex].correctAnswer) {
//         correctAnswers++;
//     };
// };


function showResults() {
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    //$(".results").show();
    $(".questions").hide();

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numberCorrect = 0;

    // for each question...
    questions.forEach((currentQ, questionNum) => {

        // find selected answer
        const answerContainer = answerContainers[questionNum];
        const selector = `input[name=question${questionNum}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQ.answer) {
            // add to the number of correct answers
            numberCorrect++;

        }
        // if answer is wrong or blank
        else {
            numberIncorrect++;
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numberCorrect + " out of " + questions.length;
}









