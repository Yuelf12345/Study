/**
 * 
 * @param {Number} num   射击轮数
 * @param {Array} player 选手ID
 * @param {Array} mark   选手成绩
 * @returns 
 * 13
 * 3,3,7,4,4,4,4,7,7,3,5,5,5
 * 53,80,68,24,39,76,66,16,100,55,53,80,55
 * 5,3,7,4
 */




function GameSort(num,player,mark){
    let arr = []
    let map = new Map()
    player.forEach(i=>{
        if(!map.has(i)){
            map.set(i,1)
        }else{
            map.set(i,map.get(i)+1)
        }
    })
    map.forEach((key,value)=>{
        let x = []
        let sum = 0
        for(let i=0;i<num;i++){
            if(player[i] == value){
                x.push(mark[i])
                if(x.length>3){
                    x = x.sort((a,b)=>a-b).slice(1);
                }
                sum = x.reduce((total,i)=>{
                    return total+i
                },0)
            }
        }
        map.set(value,sum)
    })
    const sortMap = new Map([...map].sort((a, b) => {
        if(a[1] == b[1]){
            return b[0] - a[0]
        }
        return b[1] - a[1]
    }))
    sortMap.forEach((i,j)=>{
        arr.push(j)
    })
    return arr
}

console.log(GameSort(13,[3,3,7,4,4,4,4,7,7,3,5,5,5],[53,80,68,24,39,76,66,16,100,55,53,80,55]));