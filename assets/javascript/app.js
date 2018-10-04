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
var quizContainer = document.getElementById("questions");

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




// var showQuestions = questions[questionIndex];
// var parentDiv = $("<div>");
// var pQuestionText = $("<p>");
// pQuestionText.text(showQuestions.text);

// parentDiv.append(pQuestionText);


// for (var i = 0; i < showQuestions.options.length; i++) {

//     $(".questions").html(parseInt(questionIndex) + 1 + ". " + showQuestions[questionIndex].questions);
//     var choices = questions[questionIndex].options;
//     var formHtml = '';
//     for (var i = 0; i < choices.length; i++) {
//         formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
//             questions[questionIndex].choices[i] + '</label></div><br/>';
//     }
//     $('#form').html(formHtml);
//     $("#option0").prop('checked', true);
// };

// function checkAns() {
//     if ($("input[name=option]:checked").val() == questions[questionIndex].correctAnswer) {
//         correctAnswers++;
//     };
// };



//$(".questions").append(parentDiv);


// on submit, show results
submitButton.addEventListener('click', showResults);
