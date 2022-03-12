function isMobile(){
    if(screen.width <= 500){
        return true;
      }else{
        return false;
      }
}

function imageAnimation(){
  micron.getEle(".picture").interaction("tada").duration("1").timing("linear");
}

//Menu items
function homeClick(){
  document.getElementById("home").style="display:block";
  document.getElementById("education").style="display:none";
  document.getElementById("experience").style="display:none";
  document.getElementById("projects").style="display:none";
  //fade content in gently - figure out animations
  //fadeIn(".home");
}

function educationClick(){
  document.getElementById("home").style="display:none";
  document.getElementById("education").style="display:block";
  document.getElementById("experience").style="display:none";
  document.getElementById("projects").style="display:none";
  //fadeIn(".education");
}

function experienceClick(){
  document.getElementById("home").style="display:none";
  document.getElementById("education").style="display:none";
  document.getElementById("experience").style="display:block";
  document.getElementById("projects").style="display:none";
  //fadeIn(".experience");
}

function projectsClick(){
  document.getElementById("home").style="display:none";
  document.getElementById("education").style="display:none";
  document.getElementById("experience").style="display:none";
  document.getElementById("projects").style="display:block";
  //fadeIn(".projects");
  
}

function projectClick(num){
  var projectInfoTag = "projectinfo" + num.toString();
  var projectTag = "#project" + num.toString();
  micron.getEle(projectTag).interaction("bounce").duration(".3").timing("ease-in-out");

  document.getElementById("projectinfo1").style="display:none";
  document.getElementById("projectinfo2").style="display:none";
  document.getElementById("projectinfo3").style="display:none";
  document.getElementById("projectinfo4").style="display:none";
  document.getElementById("projectinfo5").style="display:none";

  document.getElementById(projectInfoTag).style="display:block";

}

function projectInfoClick(){
  //This code is garbage, but it works
  document.getElementById("projectinfo1").style="display:none";
  document.getElementById("projectinfo2").style="display:none";
  document.getElementById("projectinfo3").style="display:none";
  document.getElementById("projectinfo4").style="display:none";
  document.getElementById("projectinfo5").style="display:none";
}