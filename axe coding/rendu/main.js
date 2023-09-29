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
            if (radio == musique[2]){
        
            }
              break
        }
    }
}


let luffy = new character("luffy",10)
console.log(luffy)

luffy.trajet()
