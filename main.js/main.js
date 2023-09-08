const addplaylist = [...document.querySelectorAll(".add")];
const cards = [...document.querySelectorAll(".card")];
const trashIcon = [...document.querySelectorAll(".trash")];
const caixa = document.querySelector(".caixa");
const styleBottom = [...document.querySelectorAll(".b-style")];
const box_2 = document.querySelector(".caixa_2")





addplaylist.map((el, i) => {

    el.addEventListener("click", () => {
        console.log(el, i);
        let elementoNovo = document.createElement('div');
        elementoNovo = cards[i];
        caixa.appendChild(elementoNovo);
    })
})

trashIcon.forEach((ele, ind) => {
    console.log(ele, ind);
    ele.addEventListener("click", () => {
        const selectionMusic = cards[ind];
        selectionMusic.remove()
    })

})


styleBottom.map((element, i) => {

    element.addEventListener("click", () => {
        console.log(element.textContent);
        const styleMusic = [...document.querySelectorAll(".style")];
        const result = styleMusic.filter((styleMusic) => {
            if (styleMusic.textContent == element.textContent) {

            } else {
                let elementFilter = document.createElement('div');
                elementFilter = cards[i]
                box_2.appendChild(elementFilter)
            }



        })

    })
})






