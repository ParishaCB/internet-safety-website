(function() {
  var questions = [{
    question: "Why is it important to learn about internet safety?",
    choices: [" It's not important", " You shouldn't have to learn it", 
    " It's useless to know", " To understand the dangers of the internet"],
    correctAnswer: 3
  }, {
    question: "Internet Safety is important for everyone to know.",
    choices: [" True", " False"],
    correctAnswer: 0
  }, {
    question: "What should you do if you have experienced bullying?",
    choices: [" Tell a trusted adult", " Do nothing", " Be rude back", " Forget about it"],
    correctAnswer: 0
  }];
  
  var questionCount = 0; //Tracks question number
  var userselections = []; //Array containing user choices
  var quiz = $('#main-quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click function for the 'next' button
  $('#next-button').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(userselections[questionCount])) {
      alert('Please make a selection!');
    } else {
      questionCount++;
      displayNext();
    }
  });
  
  // Click function for the 'Start Over' button
  $('#start-button').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCount = 0;
    userselections = [];
    displayNext();
    $('#start-button').hide();
  });
  
  // Animates buttons on hover
  $('.next-button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.next-button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    userselections[questionCount] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCount < questions.length){
        var nextQuestion = createQuestionElement(questionCount);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(userselections[questionCount]))) {
          $('input[value='+userselections[questionCount]+']').prop('checked', true);
        }
        
        // Controls display of buttons
        if(questionCount === 1){
          $('#next-button').show();
        } else if(questionCount === 0){
          
          $('#next-button').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next-button').hide();
        $('#start-button').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numberCorrect = 0;
    for (var i = 0; i < userselections.length; i++) {
      if (userselections[i] === questions[i].correctAnswer) {
        numberCorrect++;
      }
    }
    
    score.append('You got ' + numberCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();