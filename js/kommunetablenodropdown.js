import {fetchAnyUrl, restDelete} from "./modulejson.js";

console.log("er i kommunetable")

const urlKommuner = "http://localhost:8080/kommuner"


const btnCreateKommuneTable = document.getElementById("btnGetKommuner")
const tblKommuner = document.getElementById("tblKommuner")

function createTable(kommune) {
    let cellCount = 0

    let row = tblKommuner.insertRow()
    row.id = kommune.navn

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.kode

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.navn

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.href

    cell = row.insertCell(cellCount++)
    let img = document.createElement("img")
    img.setAttribute("src", kommune.hrefPhoto)
    img.setAttribute("alt", "Intet billede")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
    cell.appendChild(img)


    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.region.kode

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.region.navn

    const btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.setAttribute("value", "Slet kommune");
    btnDelete.className = "btn1"
    btnDelete.onclick = function () {
        document.getElementById(kommune.navn).remove();
        deleteKommune(kommune);
    }


    row.appendChild(btnDelete)

}

async function deleteKommune(kommune) {
    try {
        const url = "http://localhost:8080/kommune/slet/kode/" + kommune.kode
        const resp = await restDelete(url)
        const body = await resp.text();
        alert(body)
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

function sortKommuner(kommuner){
    return  kommuner.sort((kom1,kom2) => {
        if (kom1.region.kode > kom2.region.kode){
            return 1
        }   else if (kom2.region.kode > kom1.region.kode){
            return -1
        } else if (kom1.navn > kom2.navn) {
            return 1
        } else {
            return -1
        }
    })
}


let kommuner

async function fetchKommuner() {
    const colhead = document.getElementById("colhead")
    tblKommuner.innerHTML = ""
    tblKommuner.appendChild(colhead)
    kommuner = await fetchAnyUrl(urlKommuner)
    kommuner = sortKommuner(kommuner)
    kommuner.forEach(createTable)


}

function actionGetKommuner() {
    fetchKommuner()
}


btnCreateKommuneTable.addEventListener('click', actionGetKommuner)