let token = window.document.getElementById("token").value;

if (token) {
  sessionStorage.setItem("token", `${token}`);
}
