const input = document.querySelector('.input')
const button = document.querySelector('.button')
const infosFn = async(nome) =>{
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}`)
        const data = await resposta.json()
        console.log(data)
    }catch(err) {
        console.log(err)
    }
}
const reposFn = async(nome) => {
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}/repos`)
        const data = await resposta.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
button.addEventListener('click', () => {
    document.querySelector('.infos').innerHTML = input
    reposFn(input.value)
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.querySelector('.infos').innerHTML = input
        infosFn(input.value)
    }
});