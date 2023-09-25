const arr = ["hej","borge","anders"]

//const arrSort = arr.sort()

const arrSort = arr.sort((a,b) => {
    if (a>b) {
        return 1
    } else if (b>a) {
        return -1
    } else {
        return 0
    }
})

console.log(arrSort)

const objArr = [{"navn": "hej"},{"kode":"11"},{"kode":"borge"},{"kode":"10"},{"kode":"anders"}, {"kode":"10"}]

const objSort = objArr.sort((a,b) => {
    if (a.kode > b.kode){
        return 1
    }   else if (b.kode > a.kode){
        return -1
    } else if (a.navn > b.navn) {
        return 1
    } else {
        return -1
    }
})

console.log(objArr)