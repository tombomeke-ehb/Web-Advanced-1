document.addEventListener('DOMContentLoaded', () => {
    const haalTekstOpKnop = document.getElementById('haalTekstOp');
    const resulTaatDiv = document.getElementById('resultaat');

    haalTekstOpKnop.addEventListener('click', () => {
        resulTaatDiv.innerHTML = '<p>Tekst wordt opgehaald...</p>'

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP fout! Status: ${response.status}');
            }
            return response.json();
        })
        .then(data => {
            const formattedText= `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <p><em>Post ID: ${data.id}, USer ID: ${data.userId}</em></p>
            `;

            resulTaatDiv.innerHTML = formattedText;
        })
        .catch(error => {
            resulTaatDiv.innerHTML = `
            <p class ="error">Er is iets misgegaan bij het ophalen van de tekst : ${error.message}</p>
            <p>Probeer het later opnieuw.</p>
            `;
            console.error('Fetch Error:', error)
        })
    })
})