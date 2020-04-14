//buttons function
(function () {
  let btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = event.target.dataset.filter;
      let storeItems = document.querySelectorAll(".store-item");
      storeItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else if (filter === item.dataset.id) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
})();
//search function
(function () {
  let form = document.querySelector(".form");
  form.addEventListener("keyup", (event) => {
    event.preventDefault();
    let input = document.querySelector(".input");
    let value = input.value.toLowerCase().trim();
    let items = document.querySelectorAll(".store-item"); 
    items.forEach((item) => {
      let type = item.dataset.id;
      let length = value.length;
      let match = type.slice(0,length);
      if (value === match) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
