let input = document.querySelector("input");
let heading = document.querySelector("h2");

input.addEventListener("input", function(dets) {

  // delete karne par null aata hai
  if (dets.data !== null) {

    console.log("Typed Character :", dets.data);

    // heading me live text show hoga
    heading.textContent = input.value;

  } else {

    console.log("Character Deleted");

  }

});