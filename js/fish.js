AFRAME.registerComponent("create-fish",{
    init:function(){
          for(var i = 1; i<=20; i++){
            var posX = (Math.random()*400 + -200);
            var posY = (Math.random()*18 + 9);
            var posZ = (Math.random()*40 + -20);
            var rotY = (Math.random()*360 + -180);

            var position = {x:posX,y:posY,z:posZ};
            var rotation = {y:rotY};
            var id = `fish${i}`

            this.createFishes(id,position,rotation)
          }
    },
    createFishes:function(id,position,rotation){
       var landE1 = document.querySelector("#sea");
       var fishE1 = document.createElement("a-entity");

       fishE1.setAttribute("position",position);
       fishE1.setAttribute("rotation",rotation);
       fishE1.setAttribute("id",id);
       fishE1.setAttribute("scale",{x:1,y:1,z:1})
       fishE1.setAttribute("gltf-model","assets/fish/scene.gltf");
       fishE1.setAttribute("animation-mixer",{});
       fishE1.setAttribute("static-body",{shape:"sphere",sphereRadius:2});

       landE1.appendChild(fishE1)
    }
})