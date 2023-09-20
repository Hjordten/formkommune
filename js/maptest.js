const fruits = ["æble", "pære", "banan", "appelsin"]

const map1 = new Map()
const map2 = {}
const map3 = {}

function createFruitMap(fruit, index) {
    map1.set(index, fruit)
    map2[index] = fruit
    map3[fruit] = index
}

fruits.forEach(createFruitMap)

console.log(map1)
console.log(map1.get(1))
console.log(map2)
console.log(map3)

Object.keys(map3).forEach(k => {
    console.log("key=" + k + " typeof=" + typeof k)
})

map1.forEach((k,v) => {
    console.log("key=" + k + " typeof=" + typeof k + " value=" + v)
})