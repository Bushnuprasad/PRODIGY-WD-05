const div=document.querySelectorAll(".bishnu")
const cad=document.querySelector("div")
console.log(cad);

div.forEach(function(bishnu){
    // console.log(bishnu)
    bishnu.addEventListener('click', function(e){
       
        if(e.target.id==="red")
        {
            cad.style.background="linear-gradient(135deg,#65eda4,#a758f1)"
        }
        if(e.target.id==="yello")
        {
            cad.style.background="linear-gradient(135deg,#2ffe00,#58f1e7)"
        }
        if(e.target.id==="green")
        {
            cad.style.background="linear-gradient(135deg,#bfef65,rgb(250, 113, 182))"
        }
    })
})

