document.body.onload=function (){
    nbr=3;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for (i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="Photo";
        div.style.backgroundImage="url('image/im"+i+".jpg')";
        container.appendChild(div);                  
    }
}
g.onclick=function(){
    
    if (p<0)
    p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.8885s ease";
    afficherMasquer();
}
d.onclick=function(){
    if (p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.8885s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if (p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
    
    if (p==-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
}