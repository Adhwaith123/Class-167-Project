AFRAME.registerComponent("play-on-click", {
    schema:{
        isPlaying:{type:"boolean",default:false}
    },
    init:function(){

    },
    play:function(){
        window.addEventListener("click",this.onClick)
    },
    onClick:function(event){
        if(!this.videoEl){
            return
        }
        var isplaying=this.el.getAttribute("play-on-click").isplaying
        if(!isPlaying){
            this.el.setAttribute("play-on-click",{
                isPlaying:true
            })
        }
    }
 //Add code here
  
});
