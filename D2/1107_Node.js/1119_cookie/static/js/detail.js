localStorage.setItem("isOpen", true);

window.addEventListener("beforeunload", function () {
    this.localStorage.removeItem("isOpen");
})


window.addEventListener("storage",function(){
    //更新事件
   upDataView()
})


window.onload = function(){
   upDataView();

   document.querySelector('.delAll').onclick = function(){
        localStorage.removeItem("musicData");
        upDataView();
   }
   document.querySelector('.del').onclick = function(){
        let inputs = document.querySelectorAll('.exchange input');
        let musicData = localStorage.getItem('musicData');
        musicData = JSON.parse(localStorage.getItem('musicData')) || [];
        inputs.forEach((v,k)=>{
            if(v.checked){
                musicData.splice(k,1);
            }
        })
        localStorage.setItem("musicData",JSON.stringify(musicData));
        upDataView();
   }
}

function upDataView(){
    let musicData = localStorage.getItem("musicData");
    if (musicData){
        musicData = JSON.parse(musicData);
        let innerContent = ''
        musicData.forEach(v => {
            let str = `<ul class="myul">
            <input type="checkbox">
            <li>${v.songName}</li>
            <li>${v.singer}</li>
            <li>${v.time}</li>
            </ul>`;
            innerContent += str;
        })
        document.querySelector('.exchange').innerHTML = innerContent;
    }else{
        document.querySelector('.exchange').innerHTML = '';

    }
}