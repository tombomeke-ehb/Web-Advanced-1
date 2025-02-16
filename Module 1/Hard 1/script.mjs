/*
H1: Dynamic Menu Builder

Schrijf code die:

    Automatisch een menu genereert in de nav gebaseerd op de h1 en h2 tags
    Hoofdstukken (h1) moeten hoofditems worden
    Delen (h2) moeten subitems worden onder het juiste hoofdstuk
    Gebruik een combinatie van querySelector, getElementsByTagName en andere DOM methodes
    Het menu moet klikbaar zijn en naar de juiste sectie scrollen
*/
window.addEventListener('load', function(){
    let menu = document.getElementById('mainMenu');
    let content = document.querySelector('.content');
    let h1 = content.getElementsByTagName('h1')
    let h2 = content.getElementsByTagName('h2')
    
    let ul = document.createElement('ul');
    menu.appendChild(ul)

    for(let i = 0; i < h1.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');

        li.appendChild(a);
        ul.appendChild(li);
        a.textContent = h1[i].textContent;
    }
    let sub = document.createElement('ul');
    li.appendChild(sub);
});