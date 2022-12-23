let quticha=document.querySelector(".quticha")

let modal=document.querySelector(".modal-body")

let row=document.createElement("row")
row.classList.add("row")



reRender(soatlar)
function reRender(newPraduc){
    row.innerHTML = ""

    newPraduc.map((soat , index)=>{

    let card=document.createElement("div")
    card.setAttribute("class" , "btn btn-primary")
    card.classList.add("card")

    let col=document.createElement("div")
    col.classList.add("col-3")

    let rasim=document.createElement("img")
    rasim.src=soat.img_src
    rasim.style.height="250px"

    let button=document.createElement("button")
    button.setAttribute("onclick" , `lookSee(${index})`)
    button.setAttribute("data-bs-toggle" , "modal")
    button.setAttribute("data-bs-target" , "#kurish")
    button.setAttribute("class" , "btn btn-secondary")
    button.innerText="KO'RISH"

    let sotib_olish=document.createElement("button")
    sotib_olish.setAttribute("class" , "look")
    sotib_olish.setAttribute("onclick" , `buyPraduct(${index})`)
    sotib_olish.setAttribute("class" , "btn btn-info")
    sotib_olish.innerText="SOTIB OLISH"

    let ism=document.createElement("h3")
    ism.innerText=soat.name

  

    card.appendChild(rasim)
    card.appendChild(ism)
    card.appendChild(button)
    card.appendChild(sotib_olish)
    col.appendChild(card)
    row.appendChild(col)
    quticha.appendChild(row)
   })
}

function qidiruv(key){
   let newPraduc= soatlar.filter(soat=>{
     return soat.name.toLowerCase().includes(key.value.toLowerCase())
    })
    reRender(newPraduc)
}

function toOption(key){   
let newOption=soatlar.filter(soat=>{
    return soat.category.toLowerCase().includes(key.value.toLowerCase())
})
reRender(newOption)
}

function lookSee(index){

    
        let rasm= document.createElement("img")
        rasm.src=soatlar[index].img_src
        rasm.style.width="50%"

        let title=document.createElement("p")
        title.innerText=soatlar[index].id

        let tetle =document.createElement("p")
        tetle.innerText=soatlar[index].name

        let cost=document.createElement("p")
        cost.innerText=soatlar[index].cost

        modal.innerHTML=""

        modal.appendChild(rasm)
        modal.appendChild(tetle)
        modal.appendChild(cost)
        

    
}