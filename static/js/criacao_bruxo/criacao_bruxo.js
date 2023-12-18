import nome from "./nome.js"
import varinha from "./varinha.js"
import aparencia from "./aparencia.js"
import casa from "./casa.js"

//MENU HAMBURGUER//
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const containerFluid = document.querySelector("#root")
hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  containerFluid.classList.toggle("main-active");
})
//MENU HAMBURGUER//

const main = document.querySelector("#root")
const stepper = document.querySelector("ol.stepper");

const stepsOrder = ["#nome", "#aparencia", "#varinha", "#casa"]

const getNext = (hash) => {
    if(stepsOrder.includes(hash)){
        let next = stepsOrder.indexOf(hash) + 1;
        if(stepsOrder.length <= next) return hash;
        return stepsOrder[next];
    } 
    return hash;
}

const getPrevious = (hash) => {
    if(stepsOrder.includes(hash)){
        let previous = stepsOrder.indexOf(hash) - 1;
        if(previous < 0) return hash;
        return stepsOrder[previous];
    } 
    return hash;
}

const setSugestionsButton = () => {
    const btn = main.querySelector(".sugestions-btn");
    btn.addEventListener("click", () => {

    })
}

const init = () => {

    window.addEventListener("hashchange", () => {
        main.innerHTML = "";

        const stepperItem = stepper.querySelector(".stepper-item.active");
        const navigationBtns = document.querySelector("#navigation-btns");
        const previousBtn = navigationBtns.querySelector(".previous.btn")
        const nextBtn = navigationBtns.querySelector(".next.btn")

        if(stepperItem != null) {
            stepperItem.classList.remove("active");
        }
        let item;
        switch(window.location.hash){
            case "#nome":
                main.appendChild(nome());
                item = stepper.querySelector(".stepper-item.nome")
                previousBtn.setAttribute("href", getPrevious(window.location.hash))
                nextBtn.setAttribute("href", getNext(window.location.hash))
                
                break;
            case "#aparencia":
                main.appendChild(aparencia());
                item = stepper.querySelector(".stepper-item.aparencia")
                previousBtn.setAttribute("href", getPrevious(window.location.hash))
                nextBtn.setAttribute("href", getNext(window.location.hash))
                break;
            case "#varinha":
                main.appendChild(varinha());
                item = stepper.querySelector(".stepper-item.varinha")
                previousBtn.setAttribute("href", getPrevious(window.location.hash))
                nextBtn.setAttribute("href", getNext(window.location.hash))
                break;
            case "#casa":
                main.appendChild(casa());
                item = stepper.querySelector(".stepper-item.casa")
                previousBtn.setAttribute("href", getPrevious(window.location.hash))
                nextBtn.setAttribute("href", getNext(window.location.hash))
                break;
            default:
                main.appendChild(nome());
                item = stepper.querySelector(".stepper-item.nome")
                previousBtn.setAttribute("href", getPrevious(window.location.hash))
                nextBtn.setAttribute("href", getNext(window.location.hash))
        }

        if(item != null) {
            item.classList.add("active")
        }

    })
}

window.addEventListener("load", () => {
    main.appendChild(nome());
    init();
})

$(document).ready(

    function() {
        $(".hamburguer").click(function(){
            $(".nav").toggleClass("active");
            $("main").toggleClass("main-active");
        })
    }
);