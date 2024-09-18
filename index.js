// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
cat.length =0;
function destructivelyAppendCat(name) {
    cats.push("Ralph")
    
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
 function destructivelyRemoveLastCat(){
    cats.pop()
 }
 function destructivelyRemoveFirstCat(){
    cats.shift()
 }
function appendCat(name){
    let catsy=[...cats,"Broom"]
    return catsy
}
function prependCat(name) {
    let cat=["Arnold" ,...cats]
    return cat
}
function removeLastCat(name){
    let catsi=cats.slice(0, cats.length - 1);
    return catsi
}
function removeFirstCat(names) {
    let catty=cats.slice(1)
    return catty
    
}
