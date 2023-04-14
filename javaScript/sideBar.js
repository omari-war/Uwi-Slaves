const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});


function resetHighlighted() {
    let i1 = document.getElementById('item-1')
    let i2 = document.getElementById('item-2')
    let i3 = document.getElementById('item-3')
    i1.classList.remove('is-active')
    i2.classList.remove('is-active')
    i3.classList.remove('is-active')
}

function highlight(element) {
    resetHighlighted();
    element.classList.add('is-active');
}
