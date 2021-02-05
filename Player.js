class Player{
    
    constructor(){
        this.index=0
        this.distance=0
        this.name=null;
        this.rank=0

    }
    getCount(){
        var getCountref=database.ref('playerCount');
        getCountref.on("value",(data)=> {
         playerCount=data.val();    
    })
    
}
update(){
    var playerIndex="Players/Player"+this.index
    database.ref(playerIndex).update({
        'name': this.name,
        'distance':this.distance,
        'rank':this.rank


    })
}
 updateCount(count){
    database.ref("/").update({
        'playerCount': count

    })
 }
 // static functions refer to classes rather than, it is called even when the object is not initiallised
 // it is called directly using class name
 static getPlayerInfo(){
     var playerInfoRef=database.ref('Players');
     playerInfoRef.on("value",(data)=>{
     allPlayers=data.val();
    
     })

     
 }
 getFinishedPlayer(){
     database.ref("finishPlayers").on("value",(data)=>{
         finishPlayers=data.val();
     })
 }
 static updateFinishedPlayer(){
     database.ref('/').update({
         finishPlayers:finishPlayers+1
     })
       this.rank+=1
     }

}
