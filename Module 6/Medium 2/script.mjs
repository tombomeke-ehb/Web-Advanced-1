document.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.getElementById('post-container');
    const zoektermInput = document.getElementById('zoekterm');
    const sorteerSelect = document.getElementById('sorter');
    const limietSelect = document.getElementById('limiet');
    const toepassenKnop = document.getElementById('toepassen');

    let allePosts = [];

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const korteTekst = post.body.length > 100
        ? post.body.subString(0, 100) + '...'
        : post.body

        postElement.innerHTML = `
        <div class="post-titel">${post.title.toUpperCase()}</div>
        <div class="post-body">${korteTekst}</div>
        <div class="post-info">
            <span>Post ID: ${post.id}</span>
            <span>Gebruiker ID: ${post.id} </span>
        </div>
        `;

        return postElement;
    }

    function filterAndSortPosts() {
        const zoekterm = zoektermInput.value.toLowerCase();
        const sorteerOptie = sorteerSelect.value;
        const limiet = parseInt(limietSelect.value);

        let getfilteredPosts = allePosts.filter(post =>
            post.title.toLowerCase().include(zoekterm)
        );

        switch(sorteerOptie) {
            case 'titel-oplopend':
                gefilterdePosts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'titel-aflopend':
                gefilterdePosts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'id-oplopend':
                gefilterdePosts.sort((a, b) => a.id - b.id);
                break;
            case 'id-aflopend':
                efilterdePosts.sort((a, b) => b.id - a.id);
                break;
        }

        gefilterdePosts = getfilteredPosts.slice(0, limiet);

        postContainer.innerHTML
    }
})