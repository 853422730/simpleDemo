/**
 * Created by Administrator on 2016/8/25.
 */
function clock(size,watchbox,dialBg){
    this.size = size || 350;
    this.watchbox = watchbox? $(watchbox) : $(".watchbox");
    this.dial = null;
    this.dialBg = dialBg || "#A5CBFF";
    //this.init();
    this.sp = null;
    this.mp = null;
    this.hp = null;

}
clock.prototype={
    init:function(){
        this.makeDial();
        this.makescale();
        this.makemid();
        this.makepointer();
        this.pointermove();
    },
    makeDial:function(){
        this.dial = $("<div>").css({
            width:this.size + "px",
            height:this.size + "px",
            border:"2px solid #333",
            borderRadius:"50%",
            backgroundColor:this.dialBg,
            position:"relative"
        }).appendTo(this.watchbox);
    },
    makescale:function(){
        var w,h;
        for(var i = 0; i < 60; i++){
            if(i % 5 ==0){
                w = 4;
                h = 18;
            }
            else{
                w = 2;
                h = 10;
            }
            $("<div>").css({
                width:w + "px",
                height:h + "px",
                background:"#3635FF",
                position:"absolute",
                left:this.size/2 - 2 + "px",
                top:"0px",
                borderRadius:"3px",
                transformOrigin:"center "+ this.size/2 +"px",
                transform:"rotate("+(i * 6)+"deg)"
            }).appendTo(this.dial);
        }
    },
    makemid:function(){
        $("<div>").css({
            width:"18px",
            height:"18px",
            background:"#333",
            borderRadius:"50%",
            position:"absolute",
            left:(this.size/2 - 9)+"px",
            top:(this.size/2 - 9)+"px",
            zIndex:"100"
        }).appendTo(this.dial);
    },
    makepointer:function(){
        this.sp = $("<div>").css({
            width:"1px",
            height:this.size/2 - 10 + "px",
            background:"red",
            position:"absolute",
            top:"40px",
            zIndex:"50",
            left:this.size/2 - 1 + "px",
            transformOrigin:"center "+ (this.size/2 - 40) +"px",
            transform:"rotate(0deg)"
        }).appendTo(this.dial);
        this.mp = $("<div>").css({
            width:"4px",
            height:"120px",
            background:"#268026",
            position:"absolute",
            borderRadius:"3px",
            left:(this.size/2 - 2 ) +"px",
            top:(this.size/2 - 120 ) + "px",
            zIndex:"30",
            transformOrigin:"center bottom",
            transform:"rotate(0deg)"
        }).appendTo(this.dial);
        this.hp = $("<div>").css({
            width:"6px",
            height:"90px",
            background:"#CC6DFF",
            position:"absolute",
            borderRadius:"50%",
            left:(this.size/2 - 3 ) +"px",
            top:(this.size/2 - 90 ) + "px",
            transformOrigin:"center bottom",
            transform:"rotate(0deg)"
        }).appendTo(this.dial);
    },
    pointermove:function(){
        var date = new Date();
        var s = date.getSeconds();
        var m = date.getMinutes();
        var h = date.getHours();
        this.sp.css({
            transform:"rotate("+ (s * 6) +"deg)"
        });
        this.mp.css({
           transform:"rotate("+ (m * 6 + s * 0.1) +"deg)"
        });
        this.hp.css({
            transform:"rotate("+ ( h * 30 + m * 0.5 + s * 3 / 360 ) +"deg)"
        });
        var that = this;
        setInterval(function(){
            var date = new Date();
            var s = date.getSeconds();
            var m = date.getMinutes();
            var h = date.getHours();
            that.sp.css({
                transform:"rotate("+ (s * 6) +"deg)"
            });
            that.mp.css({
                transform:"rotate("+ (m * 6 + s * 0.1) +"deg)"
            });
            that.hp.css({
                transform:"rotate("+ ( h * 30 + m * 0.5 + s * 3 / 360 ) +"deg)"
            });
        },1000);
    }
}