// HTML DOM node
const html = document.querySelector("html");

html.addEventListener("keypress", (e) => {
  const year = document.querySelector("#qdr_y > a");
  const month = document.querySelector("#qdr_m > a");
  const week = document.querySelector("#qdr_w > a");
  const all = document.querySelector("#qdr_ > a");

  console.log(e);

  switch (e.key) {
    case "Y":
      year.click();
      e.preventDefault();
      break;
    case "M":
      month.click();
      e.preventDefault();
      break;
    case "W":
      week.click();
      e.preventDefault();
      break;
    case "A":
      all.click();
      e.preventDefault();
      break;
    default:
      break;
  }

});
