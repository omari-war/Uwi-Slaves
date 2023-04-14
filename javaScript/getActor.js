function displayActorData(records) {
    let html = '';
    let result = document.querySelector('#result');
    for (let rec of records) {
        itemImg = "images/venue-card-placeholder.png"

        let randRating = Math.floor((Math.random() * 5) + 1);
        let ratingHTML = ''
        for (let i = 0; i < randRating; i++) {
            ratingHTML += `<i class="fa-solid fa-star"></i>`
        }


        html +=
            `<div class="grid_card" 
                    '>
                        <div loading="lazy" class="bkImg">
                            <img src="${itemImg}">    
                        </div>

                        <div class="item_detail">
                            <h3 class="title">${rec.primaryName}</h3>
                            <h6 class="release">Primary Professions: ${rec.primaryProfession}</h6>
                            `+ `${ratingHTML}` + `
                        </div>

                    </div>`
    }
    result.innerHTML = html;
}

async function getActorData() {
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/actors?page=${pageNumber}&limit=${limit}`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (result.error) {
        throw new Error(result.error.message);
    }
    return data.results;
}