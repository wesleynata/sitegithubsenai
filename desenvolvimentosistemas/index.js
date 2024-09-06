const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const localidadePerfil = document.querySelector('.localidade-perfil')
const bioPerfil = document.querySelector('.bio-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const reposPerfil = document.querySelector('.repos-perfil')

const getinfos = async () =>{
    const response = await fetch('https://api.github.com/users/wesleynata')
    const data = await response.json()
    console.log(data.name)
    titulo.innerHTML = data.name
    reposPerfil.innerHTML= data.public_repos

    if(!data){
        titulo.innerHTML = 'Wesley Natã'
        reposPerfil.innerHTML = '0'
        bioPerfil.innerHTML = 'ola sou o wesley e eu sou programador'
        segPerfil.innerHTML = 'seguidores 123 e seguindo 123 perfis'
        imagemPerfil.setAttribute('scr','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngaaa.com%2Fdetail%2F4827495&psig=AOvVaw1cw4AcO0BfYz6y2sba0eCK&ust=1725716307879000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj90K64rogDFQAAAAAdAAAAABAE')
        localidadePerfil.innerHTML = 'bayeux'


    }else{
        titulo.innerHTML = data.name
        reposPerfil.innerHTML = data.public_reposimagemPerfil.setAttribute("scr",data.avatar_url)
        bioPerfil.innerHTML = data.bio
        imagemPerfil.setAttribute('src',data.avatar_url)
        segPerfil.innerHTML = `seguidores ${data.followers} e seguindo ${data.followers} perfis`
        localidadePerfil.innerHTML = data.location

    }

} 
getinfos()