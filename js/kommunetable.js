console.log("er i kommunetable")

const urlKommune = "http://localhost:8080/kommuner"
const btnCreateKommuneTable = document.getElementById("btnGetKommuner")
const tblKommuner = document.getElementById("tblKommuner")


function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json())
}

function createTable(kommune) {
    let cellCount = 0
    let rowCount = tblKommuner.rows.length

    let row = tblKommuner.insertRow(rowCount)

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.kode

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.navn

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.href
}

let kommuner = []
async function fetchKommuner(){
    kommuner = await fetchAnyUrl(urlKommune)
    kommuner.forEach(createTable)

}

function actionGetKommuner() {
    fetchKommuner()
}


btnCreateKommuneTable.addEventListener('click', actionGetKommuner)