function toggleLogin(button) {
  if (button.innerText === "Login") {
    button.innerText = "Logout";
  } else {
    button.innerText = "Login";
  }
}

function like(button) {
  let likes = parseInt(button.innerText);
  likes++;
  button.innerText = likes + " likes";
  alert("Ninja was liked");
}

function removeButton(button) {
  button.remove();
}
