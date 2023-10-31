var cardData = [
    {name:'普通A',weight:1500,num:Infinity},
    {name:'普通A',weight:1200,num:Infinity},
    {name:'普通A',weight:1000,num:Infinity},
    {name:'稀有A',weight:400,num:4},
    {name:'稀有A',weight:300,num:3},
    {name:'稀有A',weight:300,num:3},
    {name:'传说A',weight:100,num:1},
    {name:'传说A',weight:100,num:1},
    {name:'传说A',weight:100,num:1},
]

function card(){
    var weigthTotal = cardData.reduce((total,card)=>total+=card.weight,0)
    var randomWeight = Math.floor(Math.random()*weigthTotal)
    var sum = 0
    for (let i = 0; i < cardData.length; i++) {
         sum += cardData[i].weight
         if(randomWeight<sum){
            if(cardData[i].num){
                cardData[i].num --
                return cardData[i].name
            }else{
                return card()
            }
         }
    }
}
for (let index = 0; index < 10; index++) {
    console.log(card());
}