class Form{
    constructor(){
        this.input=createInput();
        this.button=createButton("start");
        this.greeting=createElement('H3');
        this.reset=createButton("Reset")

    }
    display(){
        var title=createElement('H1')
        title.html("Car racing game");
        title.position(displayWidth/2-50,0);
      
        this.input.position(displayWidth/2-40,displayHeight/2-50);
       
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,50)
        
        this.button.mousePressed( ()=> {
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount=playerCount+1
            player.index=playerCount;
            

         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Welcome"+ player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
         
        })
        this.reset.mousePressed( ()=> {
            database.ref('/').set({
                gameState:0,
                playerCount:0,
                Players:null,
                finishPlayers:0
            }
            )
        }
        )
        
        

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
}