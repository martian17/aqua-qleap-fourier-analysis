

let ResizingCanvas = function(attrs, inner, style){
    //adjusts the size depending on the wrapper size
    let wrapper = new ELEM("div","class:resizing_canvas_wrapper"+attrs,inner,style);
    let canvas = wrapper.add("canvas","class:resizing_canvas").e;
    wrapper = wrapper.e;
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    let itv = setInterval(()=>{
        //destructor
        //if(!wrapper.parentNode)clearInterval(itv);
        if(canvas.width !== wrapper.offsetWidth || canvas.height !== wrapper.offsetHeight){
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        }
    },100);
    this.wrapper = wrapper.e;
    this.canvas = canvas.e;
};



let Display = function(){//basically the wrapper for the whole canvas display area
    //data
    this.waveVector = [];
    this.subWaves = [];
    
    let wrapper = new ELEM("div","class:display_wrapper");
    let canvas = wrapper.add("canvas").e;//underlay
    let overlay = wrapper.add("div");
    
    let width = wrapper.offsetWidth;
    let height = wrapper.offsetWidth;
    this.width = width;
    this.height = height;
    let that = this;
    let ctx = canvas.getContext("2d");
    
    //watch the size change
    (new Watcher(wrapper.e)).on(e=>e.offsetWidth !== width || e.offsetHeight !== height, e=>{
        width = e.offsetWidth;
        height = e.offsetHeight;
        that.width = width;
        that.height = height;
        canvas.width = width;
        canvas.height = height;
    });
    
    this.drawWave = function(func,r,y,h){//func returns 0-1, r 0-1
        for(let x = 0; x < width; x++){
            let xr = x/width;
            let yr = func(xr);
            
        }
    };
    
    this.scroll = 0;
    
    this.drawWave = function(func,r,y,h){
        for(let x = 0; x < width; x++){
            let xr = x/width;
            let yr = func(xr);
        }
    };
    
    
    
    
    //methods
    this.edit = function(){
        
    };
    this.play = function(){
        
    };
    this.rewind = function(){
        
    }
    this.pause = function(){
        
    };
    this.changePeriods = function(){
        
    };
    this.drawVector = function(vec){
        
    };
    this.changeDepth = function(){
        
    };
    
    
    
    
    
    
};


//main closure
(async ()=>{
    let onloop;
    
    let wrapper = new ELEM(document.getElementById("wrapper"));
    let left = wrapper.add("div");
    let right = wrapper.add("div");
    let resizingCanvas = new ResizingCanvas();
    left.add(resizingCanvas.wrapper);
    let canvas = resizingCanvas.canvas;
    let ctx = canvas.getContext("2d");
    
    //gui stuff
    right.add("");
    
    
    let animation = new Animation();
    while(true){
        let dt = await animation.nextFrame();
    }
    
    onloop = function(a){
        let dt = a.dt;
    };
})();