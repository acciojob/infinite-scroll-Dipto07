//your code here!
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');

    function addMoreItems() {
        for (let i = 0; i < 2; i++) {
            const newItem = document.createElement('li');
            newItem.textContent = 'List Item';
            list.appendChild(newItem);
        }
    }

    for (let i = 0; i < 10; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = 'List Item';
        list.appendChild(newItem);
    }

    window.addEventListener('scroll', function() {

		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addMoreItems();
        }
    });
});

