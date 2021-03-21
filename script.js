
function fun(pic)
{
  let replaceimg=document.createElement("img");
  replaceimg.src= `images/pepsi00${pic}.png`;
  console.log(replaceimg.src);
  let parent=document.getElementById("icon");
  parent.replaceChild(replaceimg,parent.firstElementChild);

  document.getElementById("sec").style.backgroundColor=" #0062be";
}

function fun2(pic)
{
  let replaceimg=document.createElement("img");
  replaceimg.src=   `images/pepsi00${pic}.png`;
  let parent=document.getElementById("icon");
  parent.replaceChild(replaceimg,parent.firstElementChild);

  document.getElementById("sec").style.backgroundColor="#a5a1a1";
}


function fun3(pic)
{
  let replaceimg=document.createElement("img");
  replaceimg.src=   `images/pepsi00${pic}.png`;
  let parent=document.getElementById("icon");
  parent.replaceChild(replaceimg,parent.firstElementChild);

  document.getElementById("sec").style.backgroundColor="black";
}