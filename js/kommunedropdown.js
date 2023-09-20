const urlKommune = "https://api.dataforsyningen.dk/kommuner";
const select = document.getElementById("ddKommuner");
const pbFillDropDown = document.getElementById("pbFillKommuner")
const inpSearch = document.getElementById("inpSearch")
const tagsgohere = document.getElementById("tagsgohere")

let kommuneMap = new Map;

function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json())
}

function fillDropdown(item) {
    const el = document.createElement("option")
    el.textContent = item.navn
    el.value = item.navn
    select.appendChild(el)
    kommuneMap.set(item.navn, item)
}

async function fetchKommuner(any) {
    select.innerHTML = '';
    const kommuneArr = await fetchAnyUrl(urlKommune)
    console.log(kommuneArr)
    kommuneArr.forEach(fillDropdown)
    console.log(kommuneMap)
}

function createATag(kommune) {
    const aTag = document.createElement('a')
    aTag.textContent = kommune.navn
    aTag.href = kommune.href
    tagsgohere.appendChild(aTag);
    const brTag = document.createElement('br')
    tagsgohere.appendChild(brTag)
}

function inpSearchChanging() {
    const name = inpSearch.value
    console.log(name)
    const foundKommune = kommuneMap.get(name)
    if (foundKommune) {
        console.log("jeg fandt kommune=" + foundKommune)
        if (!foundKommune.taget) createATag(foundKommune)
        foundKommune.taget = true
    }
}

pbFillDropDown.addEventListener('click', fetchKommuner)
inpSearch.addEventListener('input', inpSearchChanging)
