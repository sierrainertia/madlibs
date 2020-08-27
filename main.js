// listens for form submits
document.querySelector("form").addEventListener("submit", (event) => {
  // prevents the page from refreshing
  event.preventDefault();

  //selects name1 from html
  const name1 = document.querySelector("#name1").value;
  //gets all blanks labeled name1
  const name1blanks = document.querySelectorAll("span[data-blank=name1]");
  //put stuff on page
  name1blanks.forEach((blank) => {
    blank.innerHTML = name1;
  });

  //selects adjective1
  const adjective1 = document.querySelector("#adjective1").value;
  //gets all blanks labeled adjective1
  const adjective1blanks = document.querySelectorAll(
    "span[data-blank=adjective1]"
  );
  //put stuff on page
  adjective1blanks.forEach((blank) => {
    blank.innerHTML = adjective1;
  });

  //selects bug or animal
  const bugOrAnimal = document.querySelector("#bugOrAnimal").value;
  //gets all blanks labeled bugOrAnimal
  const animal3blanks = document.querySelectorAll(
    "span[data-blank=bugOrAnimal]"
  );
  //put stuff on page
  animal3blanks.forEach((blank) => {
    blank.innerHTML = bugOrAnimal;
  });

  //selects an action verb
  const action1 = document.querySelector("#action1").value;
  //gets all blanks labeled action1
  const action1blanks = document.querySelectorAll("span[data-blank=action1]");
  //put stuff on page
  action1blanks.forEach((blank) => {
    blank.innerHTML = action1;
  });

  //selects the direction1
  const direction1 = document.querySelector("#direction1").value;
  //gets all blanks labeled adjective
  const direction1blanks = document.querySelectorAll(
    "span[data-blank=direction1]"
  );
  //put stuff on page
  direction1blanks.forEach((blank) => {
    blank.innerHTML = direction1;
  });

  //selects the direction2
  const direction2 = document.querySelector("#direction2").value;
  //gets all blanks labeled adjective
  const direction2blanks = document.querySelectorAll(
    "span[data-blank=direction2]"
  );
  //put stuff on page
  direction2blanks.forEach((blank) => {
    blank.innerHTML = direction2;
  });

  //selects num1
  const num1 = document.querySelector("#num1").value;
  //gets all blanks labeled adjective
  const num1blanks = document.querySelectorAll("span[data-blank=num1]");
  //put stuff on page
  num1blanks.forEach((blank) => {
    blank.innerHTML = num1;
  });

  //selects the name 2
  const name2 = document.querySelector("#name2").value;
  //gets all blanks labeled name2
  const name2blanks = document.querySelectorAll("span[data-blank=name2]");
  //put stuff on page
  name2blanks.forEach((blank) => {
    blank.innerHTML = name2;
  });

  //selects 2nd action verb
  const action2 = document.querySelector("#action2").value;
  //gets all blanks labeled action2
  const action2blanks = document.querySelectorAll("span[data-blank=action2]");
  //put stuff on page
  action2blanks.forEach((blank) => {
    blank.innerHTML = action2;
  });

  //selects num2
  const num2 = document.querySelector("#num2").value;
  //gets all blanks labeled adjective
  const num2blanks = document.querySelectorAll("span[data-blank=num2]");
  //put stuff on page
  num2blanks.forEach((blank) => {
    blank.innerHTML = num2;
  });

  //selects num3
  const num3 = document.querySelector("#num3").value;
  //gets all blanks labeled adjective
  const num3blanks = document.querySelectorAll("span[data-blank=num3]");
  //put stuff on page
  num3blanks.forEach((blank) => {
    blank.innerHTML = num3;
  });

  //selects num4
  const num4 = document.querySelector("#num4").value;
  //gets all blanks labeled adjective
  const num4blanks = document.querySelectorAll("span[data-blank=num4]");
  //put stuff on page
  num4blanks.forEach((blank) => {
    blank.innerHTML = num4;
  });

  //show the story when submit is pressed
  document.querySelector(".story").style.display = "block";
});

//refresh page when pressing restart
function refreshPage() {
  document.querySelector("form").reset();
  document.querySelector(".story").style.display = "none";
  // reload to top of screen
  window.scrollTo(0, 0);
}
