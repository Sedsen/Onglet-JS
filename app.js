let links = document.querySelectorAll(".tabs-links a");
let div = document.querySelectorAll(".tabs-content");
links.forEach(v => {
  v.addEventListener("click", function() {
    let active_link = document.querySelectorAll("a.active");
    //console.log(div);
    active_link.forEach(a => {
      if (a.classList.contains("active")) {
        a.classList.remove("active");
      }
    });
    this.classList.toggle("active");
    div.forEach(d => {
      if (d.classList.contains("active")) {
        d.classList.remove("active");
      }
    });
    document.querySelector(v.getAttribute("href")).classList.toggle("active");
  });
});
