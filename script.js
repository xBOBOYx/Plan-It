function planIt() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".PlanIt").val(schedule);
        }
    });
}
planIt();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".PlanIt").val();
    localStorage.setItem(time, schedule);
    console.log(schedule);
});