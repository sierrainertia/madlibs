// listens for form submits
document.querySelector("form").addEventListener("submit", event => {
  // prevents the page from refreshing
  event.preventDefault();

  //selects animal-1 from html
  var animal1 = document.querySelector("#animal-1").value;
  //gets all blanks labeled animal-1
  var animal1blanks = document.querySelectorAll("span[data-blank=animal-1]");
  //put stuff on page
  animal1blanks.forEach(blank => {
    blank.innerHTML = animal1;
  });

  //selects animal 2
  var animal2 = document.querySelector("#animal-2").value;
  //gets all blanks labeled animal-2
  var animal2blanks = document.querySelectorAll("span[data-blank=animal-2]");
  //put stuff on page
  animal2blanks.forEach(blank => {
    blank.innerHTML = animal2;
  });

  //selects animal 3
  var animal3 = document.querySelector("#animal-3").value;
  //gets all blanks labeled animal-3
  var animal3blanks = document.querySelectorAll("span[data-blank=animal-3]");
  //put stuff on page
  animal3blanks.forEach(blank => {
    blank.innerHTML = animal3;
  });

  //selects an adjective
  var adjective = document.querySelector("#adj-1").value;
  //gets all blanks labeled adjective
  var adjectiveblanks = document.querySelectorAll("span[data-blank=adjective]");
  //put stuff on page
  adjectiveblanks.forEach(blank => {
    blank.innerHTML = adjective;
  });

  //selects the motivational quote
  var motivational = document.querySelector("#quote").value;
  //gets all blanks labeled adjective
  var motivationalblanks = document.querySelectorAll(
    "span[data-blank=motivational]"
  );
  //put stuff on page
  motivationalblanks.forEach(blank => {
    blank.innerHTML = motivational;
  });

  //selects the verb quote
  var verb = document.querySelector("#verb-1").value;
  //gets all blanks labeled adjective
  var verbblanks = document.querySelectorAll("span[data-blank=verb]");
  //put stuff on page
  verbblanks.forEach(blank => {
    blank.innerHTML = verb;
  });

  //selects the number
  var number = document.querySelector("#num-1").value;
  //gets all blanks labeled number
  var numberblanks = document.querySelectorAll("span[data-blank=number]");
  //put stuff on page
  numberblanks.forEach(blank => {
    blank.innerHTML = number;
  });

  //selects yes or no input
  var yesno = document.querySelector("[name=answer]:checked").value;
  //gets all blanks labeled yes-no
  var yesnoblanks = document.querySelectorAll("span[data-blank=yes-no]");
  //put stuff on page
  yesnoblanks.forEach(blank => {
    blank.innerHTML = yesno;
  });

  //selects the speed
  var speed = document.querySelector("#speed").value;
  //gets all blanks labeled speed
  var speedblanks = document.querySelectorAll("span[data-blank=speed]");
  //put stuff on page
  speedblanks.forEach(blank => {
    blank.innerHTML = speed;
  });

  //selects the message
  var message = document.querySelector("#message").value;
  //gets all blanks labeled message
  var messageblanks = document.querySelectorAll("span[data-blank=message]");
  //put stuff on page
  messageblanks.forEach(blank => {
    blank.innerHTML = speed;
  });

  //show the story when submit is pressed
  document.querySelector(".story").style.display = "block";
});

//refresh page when pressing restart
function refreshPage() {
  window.location.reload();
}
