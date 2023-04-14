async function showTitleData() {
    if (stateTitleData.length <= 0) {
        stateTitleData = await getMovieTitleData();
    }
    displayMovieTitleData(stateTitleData);
    movieDdownMenu();
}
    
async function showTVData() {
    if (stateTVData.length <= 0) {
        stateTVData = await getTvShowTitleData();
    }
    displayTvShowTitleData(stateTVData);
    tvDdownMenu();
}

async function showActorData() {
    if (stateActorData.length <= 0) {
        stateActorData = await getActorData();
    }
    displayActorData(stateActorData);
    actorDdownMenu();

}

function descending(a, b) {
    const titleA = a.titleText.text.toUpperCase();
    const titleB = b.titleText.text.toUpperCase();
    if (titleA > titleB) {
        return -1;
    }
    if (titleA < titleB) {
        return 1
    }
    return 0
}

function ascending(a, b) {
    const titleA = a.titleText.text.toUpperCase();
    const titleB = b.titleText.text.toUpperCase();
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1
    }
    return 0
}

function movieSort(direction) {
    let sortedData = [];
    let stateTitleDataCopy = stateTitleData;

    if (direction == 'd'){
        sortedData = stateTitleDataCopy.sort((a, b) => descending(a, b));
    }

    if (direction == 'a') {
        sortedData = stateTitleDataCopy.sort((a, b) => ascending(a, b));
    }

    displayMovieTitleData(sortedData);
}

function actorSort(direction) {
    let sortedData = [];
    let stateActorDataCopy = stateActorData;
    console.log(stateActorDataCopy);

    if (direction == 'd'){
        sortedData = stateActorDataCopy.sort((a, b) => {
            const titleA = a.primaryName.toUpperCase();
            const titleB = b.primaryName.toUpperCase();
            if (titleA > titleB) {
                return -1;
            }
            if (titleA < titleB) {
                return 1
            }
            return 0
        });
    }

    if (direction == 'a') {
        sortedData = stateActorDataCopy.sort((a, b) => {
            const titleA = a.primaryName.toUpperCase();
            const titleB = b.primaryName.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1
            }
            return 0
        });
    }

    displayActorData(sortedData);
}

function tvSort(direction) {
    let sortedData = [];
    let stateTVDataCopy = stateTVData;

    if (direction == 'd'){
        sortedData = stateTVDataCopy.sort((a, b) => descending(a, b));
    }

    if (direction == 'a') {
        sortedData = stateTVDataCopy.sort((a, b) => ascending(a, b));
    }

    displayTvShowTitleData(sortedData);
}

function search() {
    let item = document.getElementById('searchBox')
    let searchVal = item.value;
    let searchResults = [];
    let data = [];
    data = stateTitleData.concat(stateTVData)

    for (let i = 0; i < data.length; i++) {
        if (data[i].titleText.text.toUpperCase().includes(searchVal.toUpperCase())){
            searchResults.push(data[i]);
        }
    }

    displayMovieTitleData(searchResults);

}