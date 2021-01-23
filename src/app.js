const content = null || document.getElementById('container')

let header = document.createElement('header')

let app = document.createElement('div')

let footer = document.createElement('footer')
footer.setAttribute( 'class', 'my-5 pt-5 text-muted text-center text-small')
footer.innerHTML = `<p>© Copyrigth 2021</p>`

header.setAttribute( 'class', 'align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm')
header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container m-auto" width="100%">
            <a class="navbar-brand" href="#">
                <img src="img/bootstrap-5.svg" class="img-fluid" width="200px" alt="">
            </a>
            <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="aula01.html">Desafio 2</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#">Desabilitado</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
`
app.setAttribute('class', 'container')
app.innerHTML = `
    <div class="row mt-5 mb-5">
        <div class="col-md-6 m-auto">
            <div class="fluid text-center pt-5">
                <h2>Formulário de login</h2>
                <p>Seja bem vindo ao Bootstrap</p>
            </div>
            <img src="img/bootstrap-icons.png" class="img-fluid m-auto" width="100%" alt="Imagem resposiva">
        </div>
        <div class="col-md-6 m-auto">
            <div class="card">
                <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                <form class="p-5">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Seu email</label>
                        <input type="email" class="form-control  mb-4">
                        <small class="form-text text-muted">Adicione aqui seu email.</small>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" class="form-control  mb-4">
                    </div>
                    <div class="form-group form-check mb-4">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="manter">Me mantenha conectado</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Clique aqui para logar</button>
                </form>
            </div>
        </div>
    </div>
`

content.appendChild(header)
content.appendChild(app)
content.appendChild(footer)