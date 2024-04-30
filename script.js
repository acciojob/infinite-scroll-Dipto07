// Get the list element
var list = document.getElementById('list');

function addItems(numItems) {
    for (var i = 0; i < numItems; i++) {
        var newItem = document.createElement('li');
        newItem.innerText = 'Item ' + (list.childElementCount + 1);
        list.appendChild(newItem);
    }
}

addItems(10);

function isScrolledToBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

window.onscroll = function() {
    if (isScrolledToBottom()) {

		addItems(2);
    }
};
