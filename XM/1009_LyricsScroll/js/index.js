/**
 * 解析字符串
 * 对象{time:时间，words:歌词}
 */
function parseLrc(){
    var lines = lrc.split('\n')
    var result = []
    for(var i = 0;i<lines.length;i++){
       var str = lines[i]
        var parts = str.split(']')
        var timeStr = parts[0].substring(1)
        var obj = {
            time:parseTime(timeStr),
            words:parts[1]
        }
        result.push(obj)
    }
    return result;
    //页面渲染
    // function render(){
    //     result.forEach((item)=>{
    //         // console.log(item.words)
    //         var liEle=document.createElement('li');
    //         var lrcList=document.querySelector('.lrc-list')
    //         liEle.innerHTML = item.words
    //         lrcList.appendChild(liEle);
    //     })
    // }

    // render()

    //定时器滚动
    //    function lrcScroll(){
    //         result.forEach((item,index)=>{
    //             var time1 = setTimeout(function() {
    //                 var lrcList=document.querySelector('.lrc-list')
    //                 var liEle=document.createElement('li');
    //                 lrcList.style.transform = 'translateY(-'+index*30+'px)';
    //         // render()
    //             }, index * 1500)
    //             clearTimeout(time1)
    //         })
    //    }
    //    lrcScroll()
}

//时间转换
function parseTime(timeStr){
    var parts = timeStr.split(':');
    return +parts[0]*60 + +parts[1]
}

var lrcData =parseLrc();

//dom对象
var doms = {
    audio:document.querySelector('audio'),
    ul:document.querySelector('ul'),
    container:document.querySelector('.container')
}

//获取当前播放歌词index
function findIndex() {
    var curTime = doms.audio.currentTime
    for(var i=0;i<lrcData.length;i++){
        if(curTime < lrcData[i].time){
            return i - 1;
        }
    }
    return lrcData.length - 1;
}

//页面渲染
function createLrcElements(){
    var frag = document.createDocumentFragment();//文档片段,一次插入dom树
    for (let i = 0; i < lrcData.length; i++) {
       var li = document.createElement('li')
       li.textContent = lrcData[i].words
       frag.appendChild(li);
    }
    doms.ul.appendChild(frag);
}
createLrcElements()

//容器高度
var containerHeight = doms.container.clientHeight;
var liHeight = doms.ul.children[0].clientHeight;
var maxOffset = doms.ul.clientHeight - containerHeight;

//偏移 高光
function setOffset(){
    var index = findIndex()
    var offset = liHeight * index + liHeight / 2 - containerHeight / 2
    if(offset < 0 ){
        offset = 0
    }
    if(offset > maxOffset){
        offset = maxOffset
    }
    doms.ul.style.transform = `translateY(-${offset}px)`;
    //去掉之前样式
    var li = document.querySelector('.active')
    if(li){
        li.classList.remove('active')
    }
    li = doms.ul.children[index]
    if(li){
        doms.ul.children[index].classList.add('active')
    }
}

//监听播放时间
doms.audio.addEventListener('timeupdate',setOffset)