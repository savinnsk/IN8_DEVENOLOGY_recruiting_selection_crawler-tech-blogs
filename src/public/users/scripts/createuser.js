let token = window.document.getElementById("token").value;

if (token) {
  sessionStorage.setItem("token", `${token}`);
}

function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:5000/");
oReq.setRequestHeader("x-access-token", `${token}`);
oReq.send();
