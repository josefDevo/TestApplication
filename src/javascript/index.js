var name = 1;
var theTitle = "";
var test = {

};

function testDetails() {

    theTitle = document.getElementById("titleInput").value;
    document.getElementById("testH1").innerHTML = theTitle;
    document.getElementById("titleLabel").innerHTML = "Do you want to change the title?";

    $("#removableText").hide();
    $("#singleQuestionModule").show();
    $("#tCreateTest").css('height', '50vh');
    $(".dynamicform").append(createQuestion(name));
}

$("body").on('click', '#radioAddQuestion', function () {
    name++;
    $(".dynamicform").append(createQuestion(name));

});



function createQuestion(name){
    var dynamic=`<span class="module">
                    <legend class="col-form-legend col-sm-10"></legend>
                    <div class="input-group input-group">
                        <label id="wQuestionLabel" class="form-control-label" style="width: 540px;" for="wQuestion">Question:</label>

                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                         <!-- The Question Inputfield that needs ID-->
                        
                            <input type="text" class="form-control" aria-label="" id="${theTitle + "Q" + name}" style="width: 540px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                            <label id="questionOptions" class="form-control-label" style="width: 540px;"
                                   for="wQuestion">Enter
                                avaible options:</label>
                        </div>
                    </div>
                     <!-- The radiobuttons and option inputfields that needs ID's-->

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="1"  name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "1"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "1"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="2" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "2"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "2"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="3" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "3"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "3"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="4" name="${theTitle + "rb" + name}" id="${theTitle + "Q" + name + "O" + "4"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "4"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>
                </span>
                `;
    return dynamic;

}

/*
    This is how I was able to save data from the dynamic input-fields and radio-buttons.
    I used two for-loops to first get access to the different ids. Then their values are
    stored im different variables that may be saved into a database:

    The TestID can be of this format "TeachersUser Id + testTitle"

    */


$("#saveTest").click(function () {

    // theTitle //need to be saved into the database.

   //  var testID = teacherID = testTitle;

    for (var i = 1; i <= name; i++) {


        var questionId  = theTitle + "Q" + name;

        //The Question
        var question = $("#" + questionId).val();

        for (var j = 1; j <= 4; j++) {

            // The IDs of the radio-buttons and the inputfields:
            var radioBtnID = theTitle + "Q" + [i] + "O" + [j];
            var inputTextId = theTitle + "Q" + [i] + "input" + [j];

            // Text from all the different inputfields
            var inputText = $("#" + inputTextId).val();

            // The right alternative (that is selected with radio-button)
            if($("#"+ radioBtnID).is(':checked')) {
                
                console.log("Rätt svar: " +inputText+ " SvarsId: " + inputTextId);
            }

        }
    }
});


