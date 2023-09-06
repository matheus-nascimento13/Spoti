const addplaylist = [...document.querySelectorAll(".add")]
const cards = [...document.querySelectorAll(".card")]
const trashIcon = [...document.querySelectorAll(".trash")]
const caixa = document.querySelector(".caixa")



addplaylist.map((el, i) => {

    el.addEventListener("click", () => {
        console.log(el, i);
        let elementoNovo = document.createElement('div');
        elementoNovo = cards[i];
        caixa.appendChild(elementoNovo)
    })
})

trashIcon.forEach((ele, ind) => {
    console.log(ele, ind)
    ele.addEventListener("click", () => {
        const selectionMusic = cards[ind]
        selectionMusic.remove()
    })

})

// addplaylist.addEventListener("click", () => {
//     let elementoNovo = document.createElement('div');
//     elementoNovo = cards[0]
//     caixa.appendChild(elementoNovo)
// })