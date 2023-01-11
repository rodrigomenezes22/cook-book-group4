// On Scroll adds class to navigation
onscroll = (event) => {
  if (window.scrollY > 50) {
    const headerDiv = document.getElementById("header");

    headerDiv.className = " is-scrolled";
  } else {
    const headerDiv = document.getElementById("header");
    headerDiv.className = " ";
  }
};

// To Slow scroll on click on anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
