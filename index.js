const input = document.querySelector('.input')
const button = document.querySelector('.button')
const infosFn = async(nome) =>{
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}`)
        const data = await resposta.json()
        let ctx = document.createElement('div')
        ctx.classList.add('ctx')
        ctx = ` 
                <div class ="login">
                    <img src = "${data.avatar_url}" 20px>
                    <h2>${data.name}</h2>
                    <p>login: ${data.login}</p>
                </div>
                <div class = "bio">
                    <p>Bio: ${data.bio}</p>
                    <p>seguidores: ${data.followers} |
                    Seguindo: ${data.following}</p>
                    <p> repositório publico: ${data.public_repos}</p>
                    <a href = "${data.html_url} target ="_blank"> acesse o perfil </a>
                </div>

        `
        document.querySelector('.infos').innerHTML = ctx
    }catch(err) {
        console.log(err)
    }
}
const reposFn = async(nome) => {
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}/repos`)
        const data = await resposta.json()
        data.forEach((repo) => {
            console.log(repo)
        })
    }catch(err){
        console.log(err)
    }
}
button.addEventListener('click', () => {
    document.querySelector('.infos').innerHTML = input
    reposFn(input.value)
    infosFn(input.value)
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.querySelector('.infos').innerHTML = input
        infosFn(input.value)
        reposFn(input.value)
    }
});