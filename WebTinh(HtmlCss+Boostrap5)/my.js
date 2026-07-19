let checkbtnsignup = document.querySelector(".mycssbtn1");

checkbtnsignup.addEventListener("click", () => {
  let newsign = document.createElement("div");
  let newp = document.createElement("p");
  newp.textContent = "Lỗi";
  newsign.classList.toggle("event");
  checkbtnsignup.classList.toggle("active");
  newsign.appendChild(newp);
  checkbtnsignup.append(newsign);
});
