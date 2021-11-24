class MiniBlock{
    constructor(x, y, type){
            this.x = x;
            this.y = y;
            this.type = type;
    }
    
    display(){
            if(this.type == 1){
                    fill("green");
                    rect(this.x, this.y, 200, 200);
            }else{
                    fill("red");
                    rect(this.x, this.y, 300, 150);
            }       
    }
} 