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
                    <img src = "${data.avatar_url}" style="width: 90px; height: auto;">
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
        let ctx = ''
        data.forEach((repo) => {
            ctx += ` 
                <div class ="repo">
                    <h2>${repo.name}</h2>
                </div>
                <div class = "repo1">
                    <p>Descrição: ${repo.description}</p>
                    <p>linguagem: ${repo.language} |
                    Forks: ${repo.forks}</p>
                    <p> Criado em:  ${repo.created_at}</p>
                    <p> Branch: ${repo.default_branch} </p>
                </div>
            `
            document.querySelector('.repos').innerHTML = ctx
        })
        
    }catch(err){
        console.log(err)
    }
}
button.addEventListener('click', () => {
    document.querySelector('.infos').innerHTML = input
    document.querySelector('.repos').innerHTML = input
    reposFn(input.value)
    infosFn(input.value)
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.querySelector('.infos').innerHTML = input
        document.querySelector('.repos').innerHTML = input
        infosFn(input.value)
        reposFn(input.value)
    }
});