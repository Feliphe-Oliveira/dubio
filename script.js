document.getElementById('btnDub').addEventListener('click',()=>{
    const cod = 'bipolar'
    if(document.getElementById('senha').value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }
})