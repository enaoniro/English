const fiiller = [
  {
    vname: "be",
    v2: "was",
    v3: "been",
  },

  {
    vname: "read",
    v2: "read",
    v3: "read",
  },
  {
    vname: "write",
    v2: "wrote",
    v3: "written",
  },
];

const verbBox = document.querySelector("#verb-box");
let buttonAddon1 = document.querySelector("#button-addon1");
let buttonAddon2 = document.querySelector("#button-addon2");
let buttonAddon3 = document.querySelector("#button-addon3");
let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v21");
let v3 = document.querySelector("#v3");

function renewVerb(verb, index) {
  for (index = 0; index < 3; index++) fiil = fiiller[index].vname;
  verbBox.innerHTML = fiil;

  if (v1.value == "" && v2.value == "" && v3.value != "") {
    checkIfCorrect2(verb, index);

    if (v2.value == fiiller[index].v2) {
      buttonAddon2.innerHTML = "dogru";
    }
    // checkIfCorrect2(verb,index)
    // checkIfCorrect3(verb,index)
  }
}

function checkIfCorrect1(verb, index) {
  for (index = 0; index < 3; index++) {
    verb = fiiller[index].vname;
    verb = verbBox.innerHTML;
    verbBox.innerHTML;

    if (v1.value == verb) {
      let x = "dogru";
      buttonAddon1.innerHTML = x;
    }
  }
}

function checkIfCorrect2(verb, index) {
  // index = Math.floor (Math.random()*3);

  for (index = 0; index < 3; index++) {
    past = fiiller[index].v2;
    verb2 = v21.value;
    verb = verbBox.innerHTML;

    if (past == verb2) {
      return past;
    }
  }
}

function checkIfCorrect3(index) {
  index = Math.floor(Math.random() * 3);
  perfect = fiiller[index].v3;

  if (v3.value == perfect) {
    let x = "dogru";
    buttonAddon3.innerHTML = x;
  }
}

//CLEARING THE VALUE BOXES FUNCTION
function clearTheValues() {
  return (
    (v1.value = ""),
    (v21.value = ""),
    (v3.value = ""),
    (buttonAddon1.innerHTML = ""),
    (buttonAddon2.innerHTML = ""),
    (buttonAddon3.innerHTML = ""),
    (verbBox.innerHTML = "")
  );
}
