$(function () {
    $("#testDetails").hide();
    $("#addQuestion").hide();
    $("#singleQuestionModule").hide();
    $("#chooseStudents").hide();
    $("#mavenForm").hide();
    $("#regretPanel").hide();

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