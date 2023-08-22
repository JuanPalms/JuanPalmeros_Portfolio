document.addEventListener("DOMContentLoaded", function () {
  let readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let content = this.previousElementSibling;

      if (content.style.maxHeight && content.style.maxHeight !== "none") {
        content.style.maxHeight = null;
        this.innerText = "Read More";
      } else {
        content.style.maxHeight = "100%"; // or whatever max height you desire
        this.innerText = "Read Less";
      }
    });
  });
});
