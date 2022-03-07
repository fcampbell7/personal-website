function isMobile(){
    if(screen.width <= 500){
        return true;
      }else{
        return false;
      }
}



//Menu items
function homeClick(){
  document.getElementById("home").style="display:block";
  //fade content in gently - figure out animations
}

function educationClick(){
  document.getElementById("home").style="display:none";
}

function experienceClick(){
  document.getElementById("home").style="display:none";
  
}

function projectsClick(){
  document.getElementById("home").style="display:none";
  
}

function cvClick(){
  document.getElementById("home").style="display:none";
  
}

function randomGradient(){
  
  rand = Math.floor(Math.random() * 4);

  if(rand==0){
    //document.getElementById("body").style="background:linear-gradient(45deg, #f2ff36, #ffc31e,#15ff48, #b1fd37)";
  }

  if(rand==1){
    //document.getElementById("body").style="background:linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
  }

  if(rand==2){
    //document.getElementById("body").style="background:linear-gradient(45deg, #d036ff, #ff1e1e,#2c15ff,#15b5ff)";
  }

  if(rand==3){
    //document.getElementById("body").style="background:linear-gradient(45deg, #20da29, #1eff96,#f549ad,#ff158a)";
  }
  
}

function animateImage(){
  //add some sort of subtle animation to image on mouse hover
  img = document.getElementById("portrait");

  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 25,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
};

img.addEventListener('mousemove', animateit);
img.addEventListener('mouseleave', animateit);

}