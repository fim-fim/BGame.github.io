var gunBt = document.getElementById('gunBt');
var gun = document.getElementById('gun');
var GoutouSound = document.getElementById('goutouSe-kill');
const gunOpenClose = ()=>{
    gun.style.display = 'block';
    GoutouSound.play();
    const gunClose = ()=>{
        gun.style.display = 'none';
    }
    setTimeout(gunClose,2000);
    money += 1000;
    document.getElementById('reportText').textContent = '強盗を撃ちました。money:+1000';
    document.getElementById('heist').style.display = 'none';
    document.getElementById('gunBt').style.display = 'none';
}
gunBt.addEventListener("click",gunOpenClose);