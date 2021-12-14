function yourFutureCareer(career){
    var career = Math.random();
    if (career <= 0.32) {
      return "Full-Stack Developer";
    } else if (career <= 0.65) {
      return "BackEnd Developer";
    } else {
      return "FrontEnd Developer";
    }
  }
  
  yourFutureCareer();
