AFRAME.registerComponent("game-play",{
    schema:{
        contentId:{type:"string",default:"#coin"}
    },
    
      startTimer:function(duration,timerEl){
       var seconds ;
       var minutes;

       setInterval( () => {
         if(duration >= 0){

         seconds = parseInt(duration%60);
         minutes = parseInt(duration/60);
    
         if(minutes < 10){
                         minutes = "0" + minutes
                     }
                     if(seconds < 10){
                         seconds = "0" + seconds
                     }
    
                     timerEl.setAttribute("text",{value:minutes+":"+seconds});
    
            duration -= 1;
          } 
          else {
            this.gameOver()       
          }
        },1000);
      },
     init:function(){
     var duration = 120;
     var timerEl = document.querySelector("#timer")

     this.startTimer(duration,timerEl)

     },
     
  update: function () {
    this.isCollided(this.data.contentId);
  }
     ,
     isCollide:function(contentId){
        const element = document.querySelector(contentId)
        element.addEventListener("collide",(e) => {
            if(element.includes("#coin")){
                element.setAttribute("visible",false)
                this.updateScore();
                this.updateTarget();
            }
        })
     }
     ,

     updateScore:function(){
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentCount = parseInt(count)
        currentCount += 50;
        element.setAttribute("text",{value:currentCount})
      },

      updateTarget:function(){
        var element = document.querySelector("#target");
        var count = element.getAttribute("text").value;
        var currentCount = parseInt(count)
        currentCount -= 1;
        element.setAttribute("text",{value:currentCount})
      },
   

    gameOver:function(){
        diver = document.querySelector("#diver");
        element = document.querySelector("#game-over")
        diver.setAttribute("dynamic-body",{mass:1})
        element.setAttribute("visible",true)
    }
})