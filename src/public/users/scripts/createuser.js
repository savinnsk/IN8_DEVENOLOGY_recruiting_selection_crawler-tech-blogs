let token = window.document.getElementById("token");
let id = window.document.getElementById("id");

if (token.value || "s" == "s") {
  sessionStorage.setItem("token", `${token.value}`);
}

if (id.value) {
  sessionStorage.setItem("id", `${id.value}`);
}

function auth() {
  let token = window.document.getElementById("token");
  let id = window.document.getElementById("id");

  let tokenStorage = sessionStorage.getItem("token");
  token.value = `${tokenStorage}`;

  let idStorage = sessionStorage.getItem("id");
  id.value = `${idStorage}`;
}
