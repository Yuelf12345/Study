//引入
import Game from './game/game.js';
let game = new Game();

const hurt = function(){
    console.log("伤害100");
}
Function.prototype.decorateFn = function(fn){
    this();
    fn();
}
//节点
let doms = {
    login:{
        loginView:document.querySelector('.login'),
        username:document.querySelector('.username'),
        loginSub:document.querySelector('.sub')
    },
    game:{
        center:document.querySelector('.center'),
        gameView:document.querySelector('.game'),
        user:document.querySelector('.chioseusername'),
        heroView:document.querySelector('.heroContainer'),
        heroShow:document.querySelector('.heroShow'),
        skinView:document.querySelector('.skinContainer'),
        skinShow:document.querySelector('.skinShow'),
        skillsView:document.querySelector('.skillsView'),
        heroBtn:document.querySelector('.heroBtn'),
        skinBtn:document.querySelector('.skinBtn')
    },

}
doms.login.loginSub.onclick = function(){
    let username = doms.login.username.value;
    if(username){
        game.login(username);
        console.log(game);
        doms.login.loginView.style.display = 'none';
        doms.game.gameView.style.display = 'block';
        doms.game.user.innerHTML = username;
        renderHero(game.player.hero);
    }
}

function renderHero(heroes) {
    doms.game.heroView.innerHTML = '';
    console.log(heroes);
    heroes.forEach(item => {
        let heroItem = document.createElement('div');
        heroItem.classList.add('heroItem')
        heroItem.innerHTML = `<img src="${item.ico}" alt="">
        <span>${item.name}</span>`;
        doms.game.heroView.appendChild(heroItem);

        heroItem.onclick = function(){  
            doms.game.center.innerHTML = '';
            doms.game.heroShow.innerHTML = '';        
            let span = document.createElement('span');
            span.innerHTML = item.name;
            doms.game.heroShow.appendChild(span);
            doms.game.center.innerHTML = item.name;
            renderSkills(item.Skills);
            // item.heroType();
            item.heroType.decorateFn(hurt)

            doms.game.skinBtn.onclick = function(){
                doms.game.heroView.style.display = 'none';
                doms.game.skinView.style.display = 'block';
                renderSkins(item.Skins);
            }
        }
    });
}

function renderSkins(skins){
    doms.game.skinShow.innerHTML = '';
    doms.game.skinView.innerHTML = '';
    doms.game.center.innerHTML = '';
    console.log(skins);
    skins.forEach((item)=>{
        let skinItem = document.createElement('div');
        skinItem.classList.add('skinItem');
        skinItem.innerHTML = `<img src="" alt="">
        <span>${item.name}</span>`;
        doms.game.skinView.appendChild(skinItem);

        skinItem.onclick = function(){
            doms.game.center.innerHTML = item.name
        }
    })
}

function renderSkills(skills) {
    doms.game.skillsView.innerHTML = ''
    skills.forEach(skill=>{
        let span = document.createElement('span');
        span.innerHTML= skill.name;
        doms.game.skillsView.appendChild(span);
    })
}

doms.game.heroBtn.onclick = function(){
    doms.game.skinView.style.display = 'none';
    doms.game.heroView.style.display = 'block';
}

