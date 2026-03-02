let body = document.querySelector("body");

let image=[
    "url('clr01.png')",
    "url('clr02.png')",
    "url('clr03.png')",
    "url('clr04.png')",
    "url('clr05.png')",
    "url('clr06.png')",
    "url('clr07.png')",
    "url('clr08.png')",
    "url('clr09.png')",
    "url('clr10.png')",
    "url('clr11.png')",
    "url('clr12.png')",
    "url('clr13.png')",
    "url('clr14.png')",
    "url('clr15.png')",
    "url('clr16.png')",
]

body.onclick=function(rit){
    let x=rit.pageX-rit.target.offsetLeft;
    let y=rit.pageY-rit.target.offsetTop;

    let xyz = document.createElement("span");

    xyz.style.left=x+"px";
    xyz.style.top=y+"px";

    let randomImage = image[Math.floor(Math.random()*image.length)];

    xyz.style.backgroundImage=randomImage;

    this.appendChild(xyz);

    setTimeout(()=>{
        xyz.remove();
    }, 5000);
};