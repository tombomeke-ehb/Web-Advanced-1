let button = document.getElementById('themaKnop');
let h1 = document.getElementById('title')
let p = document.getElementById('para')
let a = document.getElementById('link')

button.addEventListener('click', function (){
    if(button.textContent == ("Donker thema")){
        button.textContent = ("Licht thema");
        document.body.style.backgroundColor =('black')
        h1.style.color = ('white')
        p.style.color = ('white')
        a.style.color = ('white')
    }else if(button.textContent == ("Licht thema")){
        button.textContent = ("Donker thema")
        document.body.style.backgroundColor =('white')
        h1.style.color = ('black')
        p.style.color = ('black')
        a.style.color = ('black')
    }
})