function enable() {
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");
var nextBtn = document.getElementById("nextBtn");

if (check1.checked) {
    nextBtn.removeAttribute("disabled")
} else if (check2.checked) {
    nextBtn.removeAttribute("disabled")
} else if (check3.checked) {
    nextBtn.removeAttribute("disabled")
} else if (check4.checked) {
    nextBtn.removeAttribute("disabled")
} else if (check5.checked) {
    nextBtn.removeAttribute("disabled")
} else {
    nextBtn.disabled="true";
    nextBtn.click(function (){
        alert("Choose an option");
    });
}
}