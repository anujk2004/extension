let myleads=[]
let ulel = document.getElementById("ul-el")
let inputel= document.getElementById("input-el")
let inputbtn = document.getElementById("input-btn")
let deletebtn = document.getElementById("delete-btn")
let tabbtn = document.getElementById("tab-btn")


const leadsformlocalstorage=JSON.parse(localStorage.getItem("myleads")) 

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render(myleads)
})



tabbtn.addEventListener("click",function(){
     chrome.tabs.query({active : true , currentWindow : true }, function (tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)


     })   
})

if (leadsformlocalstorage){
    myleads=leadsformlocalstorage
    render(myleads)
}

inputbtn.addEventListener("click",function(){
    myleads.push(inputel.value)
    inputel.value=""
 
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})


function render(leads){
    let listitems =""
    for(let i=0; i<leads.length ; i++){
    listitems+=
    `<marquee width="60%" direction="right" height="25px">
    <li>
    <a target ='_blank' href=' ${leads[i]} '>
      ${(leads[i])} </a>
    </li>
    </marquee>`
    
    }
    ulel.innerHTML=listitems

}


