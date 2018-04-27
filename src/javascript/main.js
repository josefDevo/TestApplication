$(function () {
    $("#testDetails").hide();
    $("#addQuestion").hide();
    $("#singleQuestionModule").hide();
    $("#chooseStudents").hide();
    $("#mavenForm").hide();
    $("#regretPanel").hide();
    $("#testContainer").hide();
    $("#teacherSettings").hide();

    /* Dölj varje div hanterar det nya testet! */
    $("#dropDownJava").click(function () {
        $("#chooseTest").hide();
        $("#mavenForm").show();
        $("#regretPanel").show();
    });
});
$("#regret").click(function () {
    $("#mavenForm").hide();
    $("#regretPanel").hide();
    $("#chooseTest").show();
});

$('.shareTestContainer').click(function () {
    $("#chooseStudents").show();
});

$('.createTestContainer').click(function () {
    $("#testDetails").show();
});

$('.doTestContainer').click(function () {
    $("#testContainer").show();
});


$('.tSettingsContainer').click(function () {
    $('#tSettings').replaceWith(`
    
    <div id="teacherSettings">
    <div class="teacherCard">
        <div class="card-block">
            <form>
                <div class="form-group">
                    <label class="userSettingsLabel">Update your user details</label>
                    <hr>
                    <label id="oldUserNameLabel" for="oldUserNameInput">Enter your old email address</label>
                    <input required v-model="oldUserName" type="text" class="form-control" id="oldUserNameInput">
                </div>
                <div class="form-group">
                    <label id="newUserNameLabel" for="newUserNameInput">Enter your new email address</label>
                    <input required v-model="newUserName" type="text" class="form-control" id="newUserNameInput">
                </div>
                <div class="form-group">
                    <label id="oldPasswordLabel" for="oldPasswordInput">Enter your old password</label>
                    <input required v-model="oldPassword" type="text" class="form-control" id="oldPasswordInput"
                           placeholder="welcome">
                </div>
                <div class="form-group">
                    <label id="newPasswordLabel" for="newPasswordInput">Enter your old password</label>
                    <input required v-model="newPassword" type="text" class="form-control" id="newPasswordInput"
                           placeholder="welcome">
                </div>
            </form>
        </div>
    </div>
</div>
    
    `
    );
});

$('.sSettingsContainer').click(function () {
    $('#sSettings').replaceWith(`
    
<div id="studentSettings">
    <div class="studentCard">
        <div class="card-block">
            <form class="form-create" action="/" method="post">
                <div class="form-group">
                    <label class="userSettingsLabel">Update your user details</label>
                    <hr>
                    <label id="oldUserNameLabel" for="oldUserNameInput">Enter your old email address</label>
                    <input required v-model="oldUserName" type="text" class="form-control" id="oldUserNameInput">
                </div>
                <div class="form-group">
                    <label id="newUserNameLabel" for="newUserNameInput">Enter your new email address</label>
                    <input required v-model="newUserName" type="text" class="form-control" id="newUserNameInput">
                </div>
                <div class="form-group">
                    <label id="oldPasswordLabel" for="oldPasswordInput">Enter your old password</label>
                    <input required v-model="oldPassword" type="text" class="form-control" id="oldPasswordInput">
                </div>
                <div class="form-group">
                    <label id="newPasswordLabel" for="newPasswordInput">Enter your old password</label>
                    <input required v-model="newPassword" type="text" class="form-control" id="newPasswordInput">
                </div>
            </form>
        </div>
    </div>
</div>
    
    `
    );
});