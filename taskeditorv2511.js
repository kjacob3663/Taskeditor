<style>
.step {
	display: none;
}

#helptext {
	display: none;
}
</style>
<div class="container">

	<!-- Progress bar and feedback for the user -->
	<div class="row">
		<p>
			<span id="working_task">Sie arbeiten aktuell an Task:</span> <span
				id="task-id" class="label label-warning">#</span>
		</p>

		<p>
			<span id="tasks_completed">Sie haben bisher annotiert:</span> <span
				id="done" class="label label-info"></span> <span id="total"
				class="label label-info"></span>
		</p>

		<!-- progress bar -->
		<div class="progress progress-striped">
			<div id="progress" rel="tooltip" title="#" class="progress-bar"
				style="width: 0%;" role="progressbar"></div>
		</div>
	</div>
	<!-- end progress bar -->

	<div class="col-xs-12 col-sm-6">

		<div class="row">

			<!--  questions -->
			<h2 id="question">
				<span class="step step-0 no-info question" title="general">
					Sind auf diesem Konzertzettel Informationen über ein
					Konzertereignis zu sehen? </span> <span
					class="step step-0 with-info question" title="general"> Ist
					diese Angabe korrekt? <span id="insert-general"></span>
				</span> <span class="step step-1 no-info question" title="title">
					Wie lautet der Titel des Konzertes? </span> <span
					class="step step-1 with-info question" title="title"> Ist
					dieser Titel korrekt? <span id="insert-title"></span>
				</span> <span class="step step-2 no-info question" title="location">Wo
					hat das Konzert stattgefunden?</span> <span
					class="step step-2 with-info question" title="location">Hat
					das Konzert an folgendem Ort stattgefunden? <span
					id="insert-location"></span>
				</span> <span class="step step-3 no-info question" title="date">An
					welchem Datum hat das Konzert stattgefunden?</span> <span
					class="step step-3 with-info question" title="date">Hat das
					Konzert an folgendem Datum stattgefunden? <span id="insert-date"></span>
				</span> <span class="step step-4 no-info question last" title="time">Um
					welche Uhrzeit hat das Konzert begonnen?</span> <span
					class="step step-4 with-info question last" title="time">Hat
					das Konzert um folgende Uhrzeit begonnen? <span id="insert-time"></span>
				</span>
			</h2>
			<!-- end of questions -->
		</div>

		<div id="answer" class="row">

			<!-- answers to question 1 -->
			<div class="step step-0 no-info" title="general">
				<button class="btn btn-answer step step-0 no-info" value="yes">Ja</button>
				<button class="btn btn-answer step step-0 no-info" value="no">Nein</button>
			</div>

			<div class="step step-0 with-info" title="general">
				<button class="btn btn-answer step step-0 with-info" value="yes">Ja</button>
				<button class="btn btn-answer step step-0 with-info" value="no">Nein</button>
			</div>

			<!-- answers to question 2 -->
			<div class="step step-1 no-info" title="title">
				<textarea id="title-input" rows=4 style="width: 100%;"></textarea>
				<button id="save" class="btn btn-answer step step-1 no-info"
					value="save">
					<i class="glyphicon glyphicon-menu-right"></i> <span>Weiter</span>
				</button>
			</div>

			<div class="step step-1 with-info" title="title">
				<button class="btn btn-answer step step-1 with-info" value="yes">Ja</button>
				<button class="btn btn-answer step step-1 with-info" value="no">Nein</button>
			</div>

			<!-- answers to question 3 -->
			<div class="step step-2 no-info" title="location">
				<textarea id="location-input" rows=4 style="width: 100%;"></textarea>
				<button id="save" class="btn btn-answer step step-2 no-info"
					value="save">
					<i class="glyphicon glyphicon-menu-right"></i> <span>Weiter</span>
				</button>
			</div>

			<div class="step step-2 with-info" title="location">
				<button class="btn btn-answer step step-2 with-info" value="yes">Ja</button>
				<button class="btn btn-answer step step-2 with-info" value="no">Nein</button>
			</div>

			<!-- answers to question 4 -->
			<div class="step step-3 no-info" title="date">
				<input id="date-input" type="date"></input>
				<button id="save" class="btn btn-answer step step-3 no-info"
					value="save">
					<i class="glyphicon glyphicon-menu-right"></i> <span>Weiter</span>
				</button>
			</div>

			<div class="step step-3 with-info last" title="date">
				<button class="btn btn-answer step step-3 with-info" value="yes">Ja</button>
				<button class="btn btn-answer step step-3 with-info" value="no">Nein</button>
			</div>

			<!-- answers to question 5 -->
			<div class="step step-4 no-info last" title="time">
				<input id="time-input" type="time"></input>
				<button id="save" class="btn btn-answer step step-4 no-info last"
					value="save">
					<i class="glyphicon glyphicon-floppy-disk"></i> <span>Speichern</span>
				</button>
			</div>

			<div class="step step-4 with-info last" title="time">
				<button class="btn btn-answer step step-4 with-info last"
					value="yes">Ja</button>
				<button class="btn btn-answer step step-4 with-info last" value="no">Nein</button>
			</div>

			<!--correction of with-info tags -->
			<div id="correction">
				<span> Bitte geben Sie den korrigierten Wert an: </span>
				<textarea id="time-input" rows=4 style="width: 100%;"></textarea>
				<button class="btn btn-answer" value="save">
					<i class="glyphicon glyphicon-menu-right"></i> <span>Weiter</span>
				</button>
			</div>
		</div>

		<!--user help information -->
		<div class="row">
			<button class="btn btn" onclick="showHelpText()">
				<i class="fa fa-info-circle"></i> Hilfe
			</button>

			<p id="helptext">
				<span class="step step-0 description"> Bitte geben Sie an, ob
					auf diesem Konzertzettel Informationen zu einem einzelnen
					Konzertereignis zu sehen sind. Dazu gehören beispielsweise der Ort
					des Konzertes, das Datum und der Titel. Sind Sie sich unsicher,
					wählen Sie bitte "ja" und versuchen Sie, die folgenden Fragen nach
					Möglichkeit zu beantworten. </span> <span class="step step-1 description">Bitte
					geben Sie den Titel des Konzertes an. Typische Titel sind
					beispielsweise "2tes Sonntagskonzert" oder ähnliche Titel. Bitte
					schreiben Sie den Titel genau so, wie er auf dem Konzertzettel
					geschrieben ist, inklusiv entsprechender Interpunktion. </span> <span
					class="step step-2 description">
					</span> <span
					class="step step-3 description">Hilfstext zu Task 4</span> <span
					class="step step-4 description">Hilfstext zu Task 5</span>
			</p>
		</div>

	</div>

	<!-- full image-->
	<div class="col-xs-12 col-sm-6">
		<div class="top20 col-xs-12 col-sm-6 img-zoom-container">
			<div id="photo-link">
				<img id="img" src="http://i.imgur.com/GeHxzb7.png" style=""
					data-pagespeed-url-hash="1306214289"
					onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
			</div>
		</div>
	</div>
	<!-- end full image -->

</div>

<script type="text/javascript">

 (function(){
	 
pybossa.taskLoaded(function(task, deferred)
{
    if ( !$.isEmptyObject(task) )
    {
        var img = $('<img />');
        img.load(function() {
            // continue as soon as the image is loaded
            deferred.resolve(task);
        });
        img.attr('src', task.info.url_b).css('height', 460);
        img.addClass('img-thumbnail img-responsive');
		img.attr('id','unzoomed');
        task.info.image = img;
    }
    else
    {
        deferred.resolve(task);
    }
});

function getInput(task, tag)
{
	var text;
	switch(tag)
	{
    case "general":
        text = task.info.general;
        break;
    case "title":
        text = task.info.title;
        break;
    case "location":
    	 text = task.info.location;
        break;
    case "date":
        text = task.info.date;
        if(!(text===""))
        	{
    		var year = text.substring(0,4);
    		var month = text.substring(4,6);
    		var date = text.substring(6,8);
    		text = date + "." + month + "." + year;
        	}
        break;
    case "time":
    	 text = task.info.time;
        break;
    default:
        text = "";
	}
	return text;
}

function showFirstStep(task)
{
	showNthStep(0,task);
}

function showNthStep(n,task)
{	$('.step').hide();
	$('#correction').hide();
	$('.step-'+n).show();
	
	var questionTag = getQuestionTag(n);
	var text = getInput(task, questionTag);
	console.log(questionTag + ": " + text);
	
	if(!(text === ""))
	{
		$('.no-info').hide();
		$('.step-'+n+'.with-info').show();
		$('#insert-'+questionTag).text(text);
	}
	
	else
	{
		$('.with-info').hide();
		$('.step-'+n+'.no-info').show();
	}
} 

function obtainStepNumber(domNode)
{
	var stepNumber = parseInt(domNode.className.split(' ').filter(function(cls){
		return cls.startsWith('step-');})[0].substr(-1));
	return stepNumber;
}

function getQuestionTag(stepNumber)
{
	var questionTag = $('.question.step-'+stepNumber).attr("title");
	console.log(questionTag);
	return questionTag;
}

function getQuestionType(stepNumber)
{
	var question = $('.question.step-'+stepNumber);
	if (question.hasClass('with-info') && question.is(':visible'))
		{
		console.log($('.question.step-'+stepNumber).text())
		return "with-info";
		}
	else
		{
		return "no-info";
		}
}

pybossa.presentTask(function(task,deferred)
{
	var answer=[];
	showFirstStep(task);

	if(!$.isEmptyObject(task))
	{	
		//delete previous values from textareas
		$('textarea').each(function(i,area){area.value="";});
		
		//set image
		$('#img').attr("src",task.info.url_b);
		$("#link").attr("href",task.info.link);
		
		loadUserProgress();
		
		//click on answer
		$('.btn-answer.step').off('click').on('click',
		function(evt)
		{
				console.log("onclick triggered")
				//hide all step-related divs
				$('.step').hide();
				var btn=$(this)[0];
				var stepNumber=obtainStepNumber(btn);
				
				if(btn.value === "no" && $('div').hasClass("with-info"))
				{
					$('.with-info').hide();
					$('.step-'+stepNumber+'.no-info').show();
					return;
				}

				//get question value
				var question=$('.question.step-'+stepNumber).attr("title");
				//get button value
				var choice=btn.value;
				//if button value equals save -> question type was textarea
				if(choice==="save")
				{
					//get value of textarea
					choice = document.getElementById(getQuestionTag(stepNumber)+"-input").value;
				}
				
				var questionType = getQuestionType(stepNumber);
				//add answer to this question to overall answer
				answer.push({answer:choice,question_id:stepNumber,question:question, question_type: questionType});
				console.log(answer);
				
				if(btn.classList.contains('last'))
				{
					//save task and load new task
					pybossa.saveTask(task.id,answer).done(function(){
					deferred.resolve();});
				
				}
				
				else
				{
					showNthStep(stepNumber+1,task);
				}

		}
		);
	}	
	else
	{
		$(".skeleton").hide();
		warn_user('info','You have contributed to all available tasks! Thanks!');
	}

});
	
pybossa.run('correctioncompletioncheck');})();

<!-- load info for progress bar for user -->
function loadUserProgress() {
     pybossa.userProgress('correctioncompletioncheck').done(function(data){
         var pct = Math.round((data.done*100)/data.total);
         $("#progress").css("width", pct.toString() +"%");
         $("#progress").attr("title", pct.toString() + "% completed!");
         $("#progress").tooltip({'placement': 'left'}); 
         $("#total").text(data.total);
         $("#done").text(data.done);
     });
 }
 
// event handlers
function showHelpText()
 {
 	console.log("help");
 	$("#helptext").toggle();
 }
 

 </script>