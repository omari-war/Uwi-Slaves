function displayMovieTitleData(records) {
    let html = '';
    let result = document.querySelector('#result');
    for (let rec of records) {
        let itemImg = ""
        if (rec.primaryImage == null) {
            itemImg = "/images/venue-card-placeholder.png"
        }
        else {
            baseitemImg = rec.primaryImage.url;
            itemImg=baseitemImg.replace('_V1_','_SL750_')
            console.log(rec.primaryImage.url)
        }

        let randRating = Math.floor((Math.random() * 5) + 1);
        let ratingHTML = ''
        
        for (let i = 0; i < randRating; i++) {
            ratingHTML += `<i class="fa-solid fa-star"></i>`
        }

        html +=
            `<div class="grid_card" 
            '>
                <div class="bkImg">
                    <img loading="lazy" src="${itemImg}">    
                </div>

                <div class="item_detail">
                    <h3 class="title">${rec.titleText.text}</h3>
                    <h6 class="release">Release Date: ${rec.releaseYear.year}</h6>
                    `+ `${ratingHTML}` + `
                </div>

            </div>`
    }
    result.innerHTML = html;
} 

let pageNumber = 1; // Start with the first page
let limit = 50
async function getMovieTitleData() {
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles?page=${pageNumber}&limit=${limit}&list=most_pop_movies&sort=year.decr`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (result.error) {
        throw new Error(result.error.message);
    }

    return data.results;
}
