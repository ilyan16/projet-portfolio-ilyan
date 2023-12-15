function myFunction() {
    let x = document.getElementById("Topnav");
    console.log(x)
    if (x.className === "topclass_bar") {
      x.className += " responsive";
    } else {
      x.className = "Topnav";
    }
  }