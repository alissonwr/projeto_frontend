var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').chacked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 4){
    cont = 1
    }

    document.getElementById('radio'+cont).checked = true

}