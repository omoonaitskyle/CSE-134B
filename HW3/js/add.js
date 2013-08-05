var multipleChoiceCounter = 1;
var questionCounter = 1;
var answerCounter = 1;
var sectionCounter = 2;
var totalQuestionCounter = 0;

function addMultipleChoice() {
	var solution_1 = answerCounter;
	incrementAnswerCounter();
	var solution_2 = answerCounter;
	incrementAnswerCounter();
	var solution_3 = answerCounter;
	incrementAnswerCounter();
	var solution_4 = answerCounter;
	incrementAnswerCounter();
	
	$('<li class="question"><h2 class="question_type">Multiple Choice</h2>      <a class="delete_question" title="Delete" onclick="removeQuestion()"></a>      <a class="move_question" title="Reorder question by dragging"></a>      <span class="points"><input type="text" class="point_value" maxlength="4" value="1" onkeydown="allowNumbersOnly();" onkeyup="pointCounter()"/> pts</span>      <form class="multiple_choice" id="question_' + questionCounter + '">               <input title="Question ' + questionCounter + ' prompt." class="q_prompt" id="questions_' + questionCounter +'_prompt"	placeholder="Enter question..." />       <fieldset class="answers">          <legend>choices (check the correct answers)</legend>          <ul>            <li>              <input type="checkbox"                     name="question_' + questionCounter +'_answer"                     id="question_' + questionCounter +'_answer_'+ solution_1 + '"                     value="1"/>              <label class="hidden_text" for="question_' + questionCounter +'_answer_'+ solution_1 + '">                Check this box to mark this choice as correct.              </label>              <label class="invisible" for="question_' + questionCounter +'_answer_'+ solution_1 + '_text">                Textual content for choice 1.              </label>              <input type="text"                     id="question_' + questionCounter +'_answer_'+ solution_1 + '_text"                     class="no_border choice"  placeholder="Enter answer..." />            </li>            <li>              <input type="checkbox"                     name="question_' + questionCounter +'_answer"                     id="question_' + questionCounter +'_answer_'+ solution_2 + '"                     value="2"/>              <label class="hidden_text" for="question_' + questionCounter +'_answer_'+ solution_2 + '">                Check this box to mark this choice as correct.              </label>              <label class="invisible"  for="question_' + questionCounter +'_answer_'+ solution_2 + '_text">                Textual content for choice 2.              </label>              <input type="text"                     id="question_' + questionCounter +'_answer_'+ solution_2 + '_text"                     class="no_border choice"                     placeholder="Enter answer..." />            </li>            <li>              <input type="checkbox"                     name="question_' + questionCounter +'_answer"                     id="question_' + questionCounter +'_answer_'+ solution_3 + '"                     value="3"/>              <label class="hidden_text" for="question_' + questionCounter +'_answer_'+ solution_3 + '">                Check this box to mark this choice as correct.              </label>              <label class="invisible"  for="question_' + questionCounter +'_answer_'+ solution_3 + '_text">                Textual content for choice 3.              </label>              <input type="text"                     id="question_' + questionCounter +'_answer_'+ solution_3 + '_text"                     class="no_border choice"                     placeholder="Enter answer..." />     <img class="delete_answer_button" src="img/delete_button.jpg" onclick="deleteExtraAnswer();" alt=""></img>        </li>            <li>              <input type="checkbox"                     name="question_' + questionCounter +'_answer"                     id="question_' + questionCounter +'_answer_'+ solution_4 + '"                     value="4"/>              <label class="hidden_text" for="question_' + questionCounter +'_answer_'+ solution_4 + '">                Check this box to mark this choice as correct.              </label>              <label class="invisible"  for="question_' + questionCounter +'_answer_'+ solution_4 + '_text">                Textual content for choice 4.              </label>              <input type="text"                     id="question_' + questionCounter +'_answer_'+ solution_4 + '_text"                     class="no_border choice"                     placeholder="Enter answer..." />     			  <img class="delete_answer_button" src="img/delete_button.jpg" alt="" onclick="deleteExtraAnswer();"> </img>        </li>            <li id="extra_question_button_' + questionCounter  +'" class="add_another_answer" onclick="addExtraAnswer(\'#extra_question_button_' + questionCounter  +'\');">                <a class="plus_button">Add Another Option</a>            </li>          </ul>        </fieldset>     </form>    </li>').insertBefore('.endzoned');
	incrementQuestionCounter();
	
	totalQuestionCounter++;
}

function addTrueFalse(){
	$('<li class="question"> <h2 class="question_type">True / False</h2>      <a class="delete_question" title="Delete" onclick="removeQuestion();"></a>       <a class="move_question"></a>       <span class="points"><input class="point_value" maxlength="4" value="1" onkeydown="allowNumbersOnly();" onkeyup="pointCounter()"></input> pts</span>       <form class="true_false" id="question_'+ questionCounter +'">          <input title="Question '+ questionCounter +' prompt."                class="q_prompt"                id="questions_'+ questionCounter +'_prompt" 			   type="text" 			   placeholder="Enter question...">         </input>          <fieldset class="answers">           <legend>choices (mark the correct answer)</legend>            <ul>             <li>               <input type="radio"                      name="question_'+ questionCounter +'_answer"                      id="question_'+ questionCounter +'_answer_1"                      value="true"/>               <label class="hidden_text" for="question_'+ questionCounter +'_answer_1">True</label>               <span class="smaller">True</span>             </li>              <li>               <input type="radio"                      name="question_'+ questionCounter +'_answer"                      id="question_'+ questionCounter +'_answer_2"                      value="false"/>               <label class="hidden_text" for="question_'+ questionCounter +'_answer_2">False</label>               <span class="smaller">False</span>             </li>           </ul>         </fieldset>       </form>     </li>').insertBefore('.endzoned');
	incrementQuestionCounter();
	totalQuestionCounter++;
}

function addFillIn(){
	$('<li class="question"> 	  <h2 class="question_type">Fill in the Blank</h2>       <a class="delete_question" title="Delete" onclick="removeQuestion();"></a>       <a class="move_question"></a>       <span class="points"><input class="point_value" maxlength="4" value="1" onkeydown="allowNumbersOnly();" onkeyup="pointCounter()"></input> pts</span>       <form class="fill_in" id="question_' + questionCounter + '"> 		<textarea class="fill_in_blank" placeholder="Enclose the correct answer in []..."></textarea>       </form>     </li>').insertBefore('.endzoned');
	incrementQuestionCounter();
	totalQuestionCounter++;
}

function addShortAnswer(){
	$('<li class="question"> 	  <h2 class="question_type">Short Answer</h2>       <a class="delete_question" title="Delete" onclick="removeQuestion();"></a>       <a class="move_question"></a>       <span class="points"><input class="point_value" maxlength="4" value="1" onkeydown="allowNumbersOnly();" onkeyup="pointCounter()"></input> pts</span>       <form class="short_answer" id="question_' + questionCounter + '">         <input type="text" 		       title="Question ' + questionCounter + ' prompt."                class="q_prompt"                id="questions_3_prompt" 			   placeholder="Enter question..."/>          <label title="Answer text area." id="question_' + questionCounter + '_answer">           <textarea class="answer" placeholder="Enter answer..."></textarea>         </label> 		 		<br> 		<br>      </form>     </li>').insertBefore('.endzoned');
	incrementQuestionCounter();
	totalQuestionCounter++;
}

function addExtraAnswer(addAnswerButtonIdentification){
	$('<li> <input type="checkbox" name="extra_answer_' + answerCounter + '" id="question_'+questionCounter+'_answer_'+answerCounter+'" value="1"/><label class="hidden_text" for="extra_answer_' + answerCounter + '">Check this box to mark this choice as correct.</label><label class="invisible" for="extra_answer_' + answerCounter + '_text">Textual content for choice 1.</label><input type="text" id="extra_answer_' + answerCounter + '_text" class="no_border choice guided" placeholder="Enter answer..." /><img class="delete_answer_button" src="img/delete_button.jpg" onclick="deleteExtraAnswer();" alt=""></img> </li>').insertBefore(addAnswerButtonIdentification);
	incrementAnswerCounter();
}

function addSection()
{
	$('<ol class="qb csortable sorta"><input type="text" id="sortable'+sectionCounter+'" class="section_text" placeholder="Section Title"></input></ol>').insertAfter("#sortable1");
	incrementSectionCounter();
}

function removeQuestion(){
	$('body').on('click', '.delete_question', function() {
		$(this).parents("li:first").remove();
	});
	totalQuestionCounter--;
}


function deleteExtraAnswer(){
	$('body').on('click', '.delete_answer_button', function() {
		$(this).parents("li:first").remove();
	});
}

function incrementMultipleChoiceCounter(){
	multipleChoiceCounter++;
}

function incrementQuestionCounter(){
	questionCounter++;
}

function incrementAnswerCounter(){
	answerCounter++;
}

function incrementSectionCounter(){
	sectionCounter++;
}

function pointCounter(){
	var totalPoints = new Array();

	$('.point_value').each(function(){
	totalPoints.push($(this).val());
	});

	var totalPointSum = 0;
	for (var i = 0; i < totalPoints.length; i++){
		totalPointSum += totalPoints[i] << 0;
	}
	
	$('#total_point_value').html(totalPointSum);
}

function recall(){
$(function() {
    $( "#sortable1,.sorta" ).sortable({
			connectWith:".csortable",
      placeholder: "ui-state-highlight",
			start: function(e,ui){
			ui.placeholder.height(ui.item.height());
			}
    });
    $( "#sortable" ).disableSelection();
  });
}

function allowNumbersOnly(){
	$(".point_value").keypress(function(e){
		return (e.which >= 48 && e.which <= 57 || e.which == 8 || e.keyCode == 37 || e.keyCode == 39)
	});
}

// JSON

var quizTitle;
var testTitle;
var testTitleString;

var questionJSON = new Array();
var questionString = new Array();

var questionType = new Array();
var questionPrompt = new Array();
var questionChoice = new Array();
var sectionNum = new Array();

function storeQuestions(){
	// Quiz Title
	quizTitle = $('#quiz_title_input').val();
	testTitle = {"testName": quizTitle};
	testTitleString = JSON.stringify(testTitle);
	console.log(testTitleString);
	
	for (var i = 1; i <= totalQuestionCounter; i++){
		// Question Type
		questionType[i] = $('#question_' + i).attr('class');
		
		// Question Prompt
		questionPrompt[i] = $('#questions_' + i + '_prompt').val();
		
		//Section stuff
		sectionNum[i] = $('#sortable' + i).parents("ol:first").val();
		
		//JSON
		questionJSON[i] = {
			"questionNumber": i,
			"sectionNumber":sectionNum[i],
			"type": questionType[i],
			"text": questionPrompt[i]
			}
		questionString[i] = JSON.stringify(questionJSON[i]);
		console.log(questionString[i]);
	}
	
}

function testJSON(){
	storeQuestions();
}