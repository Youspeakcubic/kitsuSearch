let current_num = 1;
let pagination = (num) => {
  if (current_num == num) {
    console.log("page is currently loaded")
  }
  else if (num == 1){
    document.getElementById("seasonCont1").style.display="block";
    document.getElementById(`seasonCont${current_num}`).style.display="none";
    current_num = 1;
  }
  else if(num == 2) {
    document.getElementById("seasonCont2").style.display="block";
    document.getElementById(`seasonCont${current_num}`).style.display="none";
    current_num = 2;
  }
  else if (num == 3) {
    document.getElementById("seasonCont3").style.display="block";
    document.getElementById(`seasonCont${current_num}`).style.display="none";
    current_num = 3;
  }
  else if (num == "previous") {
    if (current_num <= 1) { current_num = 1 }
    else {
    console.log("prev");
    document.getElementById(`seasonCont${current_num - 1}`).style.display="block";
    document.getElementById(`seasonCont${current_num }`).style.display="none";
    current_num--;
    }
  }
  else if (num == 'next') {
    if (current_num >= 3) { current_num = 3 }
    else {
    document.getElementById(`seasonCont${current_num + 1}`).style.display="block";
    document.getElementById(`seasonCont${current_num}`).style.display="none";
    current_num++;
    }
  }
}
