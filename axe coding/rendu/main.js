let musique = ["Meuda - Tiakola","Bill clinton - Freeze corleone", "Anissa - Wejdene", "Fein - Travis scott", "Foulard - Prototype"]

class character{
    constructor(name, hp){
        this.name=name;
        this.hp=hp;
    }
    
    trajet(){
        console.log("le personnage fait un trajet.")
    
        let changementdetaxi= 0
        let feuxrouges= 0
        while (feuxrouges<30 || this.hp>=0){
            feuxrouges+=1
            let radio = "Anissa - Wejdene"

    
            var rand = Math.floor(Math.random()*musique.length);
            var rValue = musique[rand];
            console.log(rValue)

            if (radio == musique){
                
                
                
                
               
               
               
               
                this.hp -= 1 
                changementdetaxi += 1
            console.log("changement de taxi")
        
            }
              if (this.hp === 0){
                console.log("y'a plus de hp")
                break  
              }
        }
    }
}


let luffy = new character("luffy",10)
console.log(luffy)

luffy.trajet()
