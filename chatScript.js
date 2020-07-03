$(document).ready(function () {
    var Time = new Date()
    var textTime = Time.getHours() + ":" + Time.getMinutes()

    $(".sendIcon1").click(function () {

        var lastSeen = Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds()
        console.log(lastSeen)
        $(".lastSeen1").text("" + lastSeen)

        var textValue = document.getElementById("firstBoxInput").value
        $("#firstBox").append("<p style=\"float:right;color:black; line-height:200%;background-color:lightblue;border-radius: 10% 10% 0% 10%;text-align:justify\">" + textValue + " " + "<span style='font-size:11px'>" + textTime + "</span>" + "</p><br>")
        $("#secondBox").append("<p style=\"float:left;color:black;line-height:200%;background-color:thistle;border-radius: 10% 10% 10% 0%;text-align:justify\">" + textValue + " " + "<span style='font-size:11px'>" + textTime + "</span>" + "</p><br>")
        $("#firstBox").append("<br>")
        $("#secondBox").append("<br>")
        scrolling1()
        $("#firstBoxInput").val(" ")
    })




    $("input[class=sendIcon2]").click(function () {

        var lastSeen = Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds()
        console.log(lastSeen)
        $(".lastSeen2").text("" + lastSeen)

        var textValue = document.getElementById("secondBoxInput").value
        $("#firstBox").append("<p style=\"float:left;color: black;line-height:200%;background-color:thistle;border-radius: 10% 10% 10% 0%;text-align:justify\">" + "<span style='font-size:11px'>" + textTime + "</span>" + " " + textValue + "</p><br>")
        $("#secondBox").append("<p style=\"float:right;color:black;line-height:200%;background-color:lightblue;border-radius: 10% 10% 0% 10%;text-align:justify\">" + "<span style='font-size:11px'>" + textTime + "</span>" + " " + textValue + "</p><br>")
        $("#firstBox").append("<br>")
        $("#secondBox").append("<br>")
        scrolling2()
        $("#secondBoxInput").val(" ")
    })
})

function scrolling1() {
    var some = document.getElementById("firstBox")
    some.scrollTop = some.scrollHeight
}
function scrolling2() {
    var some = document.getElementById("secondBox")
    some.scrollTop = some.scrollHeight
}