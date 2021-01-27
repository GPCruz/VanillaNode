import baseURL from '../../service/baseURL.js'
import IsAuthenticated from '../../service/isAuth.js'

let loginURL = baseURL + 'login'

let Login = {
    render : async() => {
        let IsAuth = await IsAuthenticated(localStorage.getItem('@token'));
        if (IsAuth) window.location.replace('#/dashboard')
        let view = `
        <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-md-6 m-auto">
                <div class="fluid text-center pt-5">
                    <h2>Faça seu login</h2>
                </div>
                <div class="icon--sign-in">
                    <i class="fas fa-sign-in-alt"></i>
                </div>
            </div>
            <div class="col-md-6 m-auto">
                <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                <form class="p-5">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Usuário</label>
                        <input id="username" type="text" class="form-control  mb-4">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input id="password" type="password" class="form-control  mb-4">
                    </div>
                    <div class="form-group form-check mb-4">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="manter">Me mantenha conectado</label>
                    </div>
                    <button id="submit_login" type="button" class="btn btn-primary">Clique aqui para logar</button>
                    <button id="go_register" type="button" class="btn btn-primary">Não tenho cadastro</button>
                </form>
            </div>
        </div>
    </div>
        `
        
        return view
    },
    after_render: async() => {
        document.getElementById('go_register').addEventListener('click', () =>{
            window.location.replace('#/signup')
        })
        document.getElementById('submit_login').addEventListener('click', () =>{
            let userLogin       = document.getElementById('username').value,
                passwordVal     = document.getElementById('password').value
            
            axios.post(loginURL,{
                usuario: userLogin,
                senha: passwordVal
            }).then( res => {
                if (res.status == 200 ){
                    window.location.replace('#/dashboard')
                    localStorage.setItem('@token', res.data.token)
                    localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                }
            }).catch( function(err){
                let res = err.response
                let message = res.data.error
                console.log('Erro: ', err)
                console.log('Response: ', res)
                console.log('Response.data: ', res.data)
                alert(`
                        Não foi possível realizar o login:
                        -> ${message}

                        Verifique os dados e tente novamente.`)
            })            
            
        })
    }
}

export default Login;