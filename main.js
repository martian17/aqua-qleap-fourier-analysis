

let ResizingCanvas = function(attrs, inner, style){
    //adjusts the size depending on the wrapper size
    let wrapper = new Elem("div","class:resizing_canvas_wrapper"+attrs,inner,style);
    let canvas = wrapper.add("canvas","class:resizing_canvas").e;
    wrapper = wrapper.e;
    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
    
};

//main function
let main = async function(){
    let wrapper = new ELEM(document.getElementById("wrapper"));
    let left = wrapper.add("div");
    let right = wrapper.add("div");
    let canvas = left.add("canvas").e;
    
};

main();