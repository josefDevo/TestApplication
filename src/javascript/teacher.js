var teacher ="LoggedInUser";

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
                        <label class="wQuestionLabel" class="form-control-label" style="width: 578px;" for="wQuestion">Question:</label>

                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                         <!-- The Question Inputfield that needs ID-->
                        
                            <input type="text" class="form-control" aria-label="" id="${teacher + theTitle + "Q" + name}" style="width: 578px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                            <label id="questionOptions" class="form-control-label" style="width: 578px;"
                                   for="wQuestion">Enter
                                avaible options:</label>
                        </div>
                    </div>
                     <!-- The radiobuttons and option inputfields that needs ID's-->

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="1"  name="${theTitle + "rb" + name}" id="${teacher + theTitle + "Q" + name + "O" + "1"}" aria-label="">
                  </span>
                            <input type="text" id="${teacher + theTitle + "Q" + name + "input" + "1"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="2" name="${theTitle + "rb" + name}" id="${teacher + theTitle + "Q" + name + "O" + "2"}" aria-label="">
                  </span>
                            <input type="text" id="${teacher + theTitle + "Q" + name + "input" + "2"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="3" name="${theTitle + "rb" + name}" id="${teacher + theTitle + "Q" + name + "O" + "3"}" aria-label="">
                  </span>
                            <input type="text" id="${teacher + theTitle + "Q" + name + "input" + "3"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" value="4" name="${theTitle + "rb" + name}" id="${teacher + theTitle + "Q" + name + "O" + "4"}" aria-label="">
                  </span>
                            <input type="text" id="${teacher + theTitle + "Q" + name + "input" + "4"}" class="form-control" aria-label="" style="width: 578px;">
                        </div>
                    </div>
                </span>
                `;
    return dynamic;

}

$("#saveTest").click(function () {


    for (var i = 1; i <= name; i++) {
        var questionId  = teacher + theTitle + "Q" + name;

        //Frågan
        var question = $("#" + questionId).val();

        for (var j = 1; j <= 4; j++) {

            var radioBtnID = teacher + theTitle + "Q" + [i] + "O" + [j];
            var inputTextId = teacher + theTitle + "Q" + [i] + "input" + [j];

            // Svars text
            var inputText = $("#" + inputTextId).val();

            if($("#"+ radioBtnID).is(':checked')) {
                // Detta svaret är rätt
                console.log("Rätt svar: " +inputText+ " SvarsId: " + inputTextId);
            }

        }
    }
});



// if ($('input[name=gender]:checked').length > 0) {
//     // do something here
