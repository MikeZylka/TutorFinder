
function getStudentQueryString() {
    var name = document.getElementById("sf-name").value;
    var email = document.getElementById("sf-email").value;
    var zip = document.getElementById("sf-zip").value;
    var subjects = document.getElementsByClassName("check-input");
    var checkedSubjects = "";
    var distance = document.getElementById("distance").value;

    for (var i = 0; i != subjects.length; ++i) {
        if (subjects[i].type="checkbox" && subjects[i].checked == true){
            checkedSubjects += subjects[i].value + ",";
        }
    
    }
    if (checkedSubjects.length == 0)
        checkedSubjects = "none";
    checkedSubjects = checkedSubjects.substr(0, checkedSubjects.length - 1);
    
    name.replace(" ", "+");
    email.replace('\.', "%2E");
    email.replace('\@', "%40");

    var queryString = "?name=" + name + "&zip=" + zip + "&subjects=" + checkedSubjects + "&distance=" + distance;
    console.log("isn't this so secure");

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", name);
    sessionStorage.setItem("zip", zip);
    sessionStorage.setItem("subjects", subjects);
    sessionStorage.setItem("distance", distance);

    return queryString;
}

window.addEventListener("load",function() {
    document.getElementById("student__signup").addEventListener("submit",function(e) {
        $(function () { 
            queryString = getStudentQueryString();
            sessionStorage.setItem("isTutor", false);
            window.location.href="view-tutors.html";
        }); 
    });
  });