const mark_all = document.querySelector(".header p");
const unseen_msg = document.querySelectorAll(".one");
const red_dot = document.querySelectorAll(".dot-box");
const notification_message_review = document.querySelector(
  ".notification_message_review"
);
console.log(notification_message_review);
// console.log(notification_message);

mark_all.addEventListener("click", function () {
  unseen_msg.forEach((x, index) => {
    x.style.background = "none";
    red_dot[index].style.background = "none";
  });
});
// notification_message_review.addEventListener("click", function () {
//   this.style.background = "hsl(211, 68%, 94%)";
// });

unseen_msg.forEach((x, index) => {
  x.addEventListener("click", function () {
    x.style.background = "none";
    red_dot[index].style.background = "none";
  });
});
