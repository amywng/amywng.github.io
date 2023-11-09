// Take action page form
var script = document.getElementById("script");
var scriptButton = document.getElementById("scriptButton");
if (scriptButton) {
  scriptButton.addEventListener("click", displayScript);
}

function displayScript() {
  var name = document.getElementById("userName").value;
  var location = document.getElementById("userLocation").value;
  var representative = document.getElementById("userRep").value;

  script.innerHTML = "Hi, my name is " + name + ", I live in " + location + ". I wanted to ask the " + representative + " to support passing major climate and clean energy investments that match the scale of the crisis. The Senate has passed Inflation Reduction Act, and I am asking you to vote yes too. We must pass this bill to put us on track for President Biden’s goal of cutting carbon pollution in half this decade. We cannot delay any longer. We need the Inflation Reduction Act now!";
}

//Take action page action item generator
var shortActions = [
  "Use reusuable bags when going shopping",
  "Try not to use plastic utencils/straws when out",
  "Avoid fast fashion and practice sustainable clothing shopping",
  "Hang your clothes to dry rather than using the dryer",
  "Use a shorter, cold water wash cycle for washing clothes",
  "Plant new trees or donate to causes that do it for you",
  "Fly less",
  "Use public transportation more",
  "Respect nature conservatory spaces"
]
var shortActionButton = document.getElementById("shortActionButton");
var shortActionItem = document.getElementById("shortActionItem");
if (shortActionButton) {
  shortActionButton.addEventListener("click", shortActionGenerator);
}
var shortActionIndex = 0;

function shortActionGenerator() {
  shortActionItem.innerHTML = shortActions[shortActionIndex];
  shortActionIndex++;
  if (shortActionIndex==shortActions.length) {
    shortActionIndex=0;
  }
}

var longActions = [
  "Invest in a hybrid/electric vehicle",
  "Start making recycling part of your daily routine",
  "Eat a plant-based diet or eat less meat and dairy",
  "Use your voice and vote",
  "Reduce your energy use",
  "Cut down your waste and consumption"
]
var longActionButton = document.getElementById("longActionButton");
var longActionItem = document.getElementById("longActionItem");
if (longActionButton) {
  longActionButton.addEventListener("click", longActionGenerator);
}
var longActionIndex = 0;

function longActionGenerator() {
  longActionItem.innerHTML = longActions[longActionIndex];
  longActionIndex++;
  if (longActionIndex==longActions.length) {
    longActionIndex=0;
  }
}