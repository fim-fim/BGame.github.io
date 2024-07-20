const Guestreturn = (guestId)=> {
    document.getElementById(guestId).style.display = 'none';
}
document.getElementById('priceBt').addEventListener('click',()=>{
    Guestreturn('guestOne');
    Guestreturn('guestTwo');
})
document.getElementById('backGuest').addEventListener('click',()=>{
    Guestreturn('guestOne');
    Guestreturn('guestTwo');
})