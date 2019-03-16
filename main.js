// let tbutton = document.getElementById("test");

// tbutton.addEventListener('click', function(e) {
//     alert("click");
//     e.stopPropagation();
//     console.log(e);
    
// })
// document.body.addEventListener('click', function() {
//     console.log('Body Clicked!!');
// })
let newb = document.createElement('button');
newb.setAttribute('class', 'newButton');
newb.textContent = "From JAvaScript";
document.body.appendChild(newb);