let inp =document.querySelector("input");

inp.addEventListener("input" ,function (dets) {
  // console.log(dets); sirf ae write karege to delete char arne pe bhi data ayega NULL

  if(dets.data !== null){
    console.log(dets.data);
  }
});

