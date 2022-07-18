AFRAME.registerComponent("coins",{
    init:function(){
          for(var i = 1; i<=10; i++){
            var posX = Math.floor(Math.random()*100 + -50);
            var posY = Math.floor(Math.random()*18 + 9);
            var posZ = Math.floor(Math.random()*60 + -40);

            var position = {x:posX,y:posY,z:posZ};
            var id = `coin${i}`

            this.createCoin(id,position)
          }
    },
    createCoin:function(id,position){
       var tressureE1 = document.querySelector("#sea");
       var coinE1 = document.createElement("a-entity");

       coinE1.setAttribute("position",position);
       coinE1.setAttribute("id",id);
       coinE1.setAttribute("geometry",{primitive:"circle",radius:1})
       coinE1.setAttribute("material","color","#ff9100");
       coinE1.setAttribute("animation",{property:"rotation",to:"0 360 0",loop:"true",dur: 1000});
       coinE1.setAttribute("static-body",{shape:"sphere",sphereRadius:2});

       tressureE1.appendChild(coinE1)
    }
})