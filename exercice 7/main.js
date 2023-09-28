class pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
          }

attackarkunir (arkunir){
  arkunir.pv -= this.attack
}
     }






let tchalla = new pokemon("tchalla",150, 250, 100, 50 )
console.log(tchalla)


let arkunir = new pokemon("arkunir", 250, 180, 90, 65)
console.log(arkunir)
