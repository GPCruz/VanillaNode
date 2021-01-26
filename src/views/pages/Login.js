import baseURL from '../../service/baseURL.js'

let loginURL = baseURL + 'login'
console.log('Login URL: ' + loginURL)

let Login = {
    render : () => {
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
                    <button id="submit_login" type="submit" class="btn btn-primary">Clique aqui para logar</button>
                </form>
            </div>
        </div>
    </div>
        `
        
        return view
    },
    after_render: async() => {
        
        // document.getElementById('username').value = 'gpcruz'
        // document.getElementById('password').value = '123456789'
        // document.getElementById('userCPF').addEventListener('input', trataCPF)
        document.getElementById('submit_login').addEventListener('click', () =>{
            let userLogin       = document.getElementById('username').value,
                passwordVal     = document.getElementById('password').value
            try{
                axios.post(loginURL,{
                    usuario: userLogin,
                    senha: passwordVal
                }).then( res => {
                    console.log( res )
                    if (res.status == 200 ){
                        // alert('Login realizado com sucesso!')
                        
                        localStorage.setItem('@token', res.data.token)
                        sessionStorage.setItem('@token', res.data.token)
                        // Cookie.set('@token', res.data.token, {expires: 7})
                    }
                    else{
                        alert('Não foi possível realizar o login\n Verifique os dados e tente novamente.')
                        // console.log( res )
                        // console.log( res.status )
                    }
                    
    
                })
            }    catch(err){
                console.log('Erro: ', err)
            }            
            
        })
    }
}

export default Login;