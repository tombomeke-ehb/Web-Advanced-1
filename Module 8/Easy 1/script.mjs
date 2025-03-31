const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
    if (body.classList.contains('light-theme') ){
        body.classList('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Schakel naar Licht Thema';
        localStorage.setItem('theme', 'light-theme')
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Schakenl naar Donker Thema';
        localStorage.setItem('theme', 'light-theme');
    }
}

themeToggleButton.addEventListener('click', toggleTheme);

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme){
        body.className = savedTheme

        if (savedTheme === 'dark-theme'){
            themeToggleButton.textContent = 'Schakel naar Licht Thema';
        }else{
            themeToggleButton.textContent = 'Schakel naar Donker Thema'
        }
    }
}

loadTheme();