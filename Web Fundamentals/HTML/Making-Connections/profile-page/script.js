//  Edit Profile - تغيير الاسم
function editProfile() {
  var name = document.querySelector("#profile-name");
  console.log(name);

  if (name.innerText !== "aziz") {
    name.innerText = "aziz";
  } else if (name.innerText == "aziz") {
    name.innerText = "ibrahim";
  }
}

//  قبول طلبات الاتصال
function handleRequest(button, accepted) {
  // حذف عنصر الطلب
  let requestItem = button.closest("li");
  requestItem.remove();
  let requestsCountEl = document.getElementById("requests-count");
  let requestsCount = parseInt(requestsCountEl.innerText);
  requestsCountEl.innerText = requestsCount - 1;
}

//    رفض طلبات الاتصال
function dicline(button, accepted) {
  // حذف عنصر الطلب
  let requestItem = button.closest("li");
  requestItem.remove();
  let requestsCountEl = document.getElementById("Your Connect");
  let requestsCount = parseInt(requestsCountEl.innerText);
  requestsCountEl.innerText = requestsCount + 1;
  let requestsCountEl2 = document.getElementById("requests-count");
  let requestsCount2 = parseInt(requestsCountEl2.innerText);
  requestsCountEl2.innerText = requestsCount2 - 1;
}
