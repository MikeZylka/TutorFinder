function update() {
  if (!sessionStorage.name) {
    document.getElementById("current-user-name").innerText = "Login";
    return;
  }
  if (sessionStorage.isTutor == "false") {
    document.getElementById("current-user-name").href = null;
    document.getElementById("current-user-name").style.pointerEvents = "none";
    document.getElementById("current-user-name").innerText =
      sessionStorage.name;
    document.getElementById("current-user-type").innerText = "student";
  } else {
    document.getElementById("current-user-name").href = null;
    document.getElementById("current-user-name").style.pointerEvents = "none";
    document.getElementById("current-user-name").innerText =
      sessionStorage.t_name;
    document.getElementById("current-user-type").innerText = "tutor";
  }
}

window.addEventListener("load", function() {
  update();
});
