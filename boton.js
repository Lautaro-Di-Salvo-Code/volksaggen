
let botonn = document.querySelector('.boton')
let backG = document.querySelector('.body-style')
// let border = document.querySelector('.border-black')

function oscuro (boton){
    
    document.addEventListener('click',e =>{
        
        // e.target.matches(botonn) ? botonn.classList.add('bg-slate-400') : f
        if(e.target.matches(boton)){
            // boton con fondo mas oscuro, y letra blanca
            botonn.classList.toggle('bg-slate-600')
            botonn.classList.toggle('text-white')         
            // fondo del body oscuro   
            backG.classList.toggle('bg-slate-700') 
            backG.classList.toggle('text-white')
            // border.classList.toggle('border-white')
        }
        // if(e.target.matches(boton)){
        //     // si se aprieta de vuelta
        //     // quita el fondo oscuro del boton y color del texto
        //     // backG.classList.add('text-white')
        // }
        
    
    })

}


document.addEventListener('DOMContentLoaded', e=>{
    oscuro(".boton", ".body-style")
})