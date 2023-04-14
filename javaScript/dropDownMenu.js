function tvDdownMenu() {
    let html = '';
    let result = document.querySelector('#ddown-menu');

    html +=
        `
                <a href="#" onclick="tvSort('a')">Ascending<i class="uil uil-arrow-right"></i></a>
                <a href="#" onclick="tvSort('d')">Descending<i class="uil uil-arrow-right"></i></a>
            `

    result.innerHTML = html;
}

function actorDdownMenu() {
    let html = '';
    let result = document.querySelector('#ddown-menu');

    html +=
        `
                <a href="#" onclick="actorSort('a')">Ascending<i class="uil uil-arrow-right"></i></a>
                <a href="#" onclick="actorSort('d')">Descending<i class="uil uil-arrow-right"></i></a>
            `

    result.innerHTML = html;
}

function movieDdownMenu() {
    let html = '';
    let result = document.querySelector('#ddown-menu');

    html +=
        `
                <a href="#" onclick="movieSort('a')">Ascending<i class="uil uil-arrow-right"></i></a>
                <a href="#" onclick="movieSort('d')">Descending<i class="uil uil-arrow-right"></i></a>
            `

    result.innerHTML = html;
}