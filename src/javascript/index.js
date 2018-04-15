var name=1;
var theTitle="online";

function testDetails() {
    theTitle = document.getElementById("titleInput").value;
    document.getElementById("testH1").innerHTML = theTitle;
    document.getElementById("titleLabel").innerHTML = "Do you want to change the title?";
    $("#removableText").hide();
    $("#singleQuestionModule").show();
    $("#tCreateTest").css('height', '50vh');

    let aQuestion = document.getElementById('addQuestion');
    if (aQuestion.style.display === 'none') {
        aQuestion.style.display = 'block';
    }
}

$("body").on('click', '#radioAddQuestion', function () {
    name++;
    $(".dynamicform").append(createQuestion(name));

});


$(".dynamicform").append(createQuestion(name));
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
                    <input type="radio" name="${theTitle +"rg"+name}" id="${theTitle + "Q" + name + "O" + "1"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "1"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" name="${theTitle +"rg"+name}" id="${theTitle + "Q" + name + "O" + "2"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "2"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" name="${theTitle +"rg"+name}" id="${theTitle + "Q" + name + "O" + "3"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "3"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="input-group input-group">
                  <span class="input-group-addon">
                    <input type="radio" name="${theTitle +"rg"+name}" id="${theTitle + "Q" + name + "O" + "4"}" aria-label="">
                  </span>
                            <input type="text" id="${theTitle + "Q" + name + "input" + "4"}" class="form-control" aria-label="" style="width: 540px;">
                        </div>
                    </div>
                </span>
                `;
    return dynamic;

}
