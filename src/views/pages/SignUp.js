import baseURL from '../../service/baseURL.js'
import IsAuthenticated from '../../service/isAuth.js'

let registerURL = baseURL + 'usuarios'
let loginURL = baseURL + 'login'

let trataCPF = (e)=>{
    let inputCPF = e.target;

    // Remove o que não for dígito
    inputCPF.value = inputCPF.value.replace(/[^\d]/g, "")

    // Limita o número de caracteres
    let lenLim = 11
    if (inputCPF.value.length > lenLim){
        inputCPF.value = inputCPF.value.slice(0,lenLim)
    }
    // console.log( maskCPF ( inputCPF.value ) )
    let unmasked = inputCPF.value;
    inputCPF.value = maskCPF(inputCPF.value)
}
function validaCPF(cpf){
    // Confere se o CPF está no formato padrão
    const pattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    // console.log ('CPF válido? ', pattern.test(cpf))

    return pattern.test(cpf)
}
function maskCPF(cpf){
    // Formata o número do CPF
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}


let SignUp = {
    render : async() => {
        let IsAuth = await IsAuthenticated(localStorage.getItem('@token'));
        if (IsAuth) window.location.replace('#/dashboard')
        let view = `
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col-md-6 m-auto">
                        <div class="fluid text-center pt-5">
                            <h2>Faça seu cadastro</h2>
                        </div>
                        <div class="icon--sign-in">
                            <i class="fas fa-user-plus"></i>
                        </div>
                    </div>
                    <div class="col-md-6 m-auto">

                        <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                        <form class="p-5">
                        
                            <div class="form-group">
                                <label for="InputCPF">CPF</label>
                                <input id="userCPF" type="text" class="form-control  mb-4">
                            </div>

                            <div class="form-group">
                                <label for="InputUserName">Insira um nome de usuário</label>
                                <input id="username" type="text" class="form-control  mb-4">
                            </div>

                            <div class="form-group">
                                <label for="InputName">Nome</label>
                                <input id="name" type="text" class="form-control  mb-4">
                            </div>

                            <div class="form-group">
                                <label for="InputSenha">Senha</label>
                                <input id="password" type="password" class="form-control  mb-4">
                            </div>

                            <div class="form-group">
                                <label for="InputConfSenha">Confirme a senha</label>
                                <input id="confPassword" type="password" class="form-control  mb-4">
                            </div>

                            <button onclick="" id="submit_new_register" type="submit" class="btn btn-primary">Clique aqui para se registrar</button>

                        </form>
                    </div>
                </div>
            </div>
        `
        
        return view
    },
    after_render: async() => {
        
        document.getElementById('userCPF').addEventListener('input', trataCPF)
        document.getElementById('submit_new_register').addEventListener('click', () =>{
            let userCPF         = document.getElementById('userCPF').value,
                userLogin       = document.getElementById('username').value,
                userName        = document.getElementById('name').value,
                passwordVal     = document.getElementById('password').value,
                confPasswordVal = document.getElementById('confPassword').value
            let errorMessage = 'Corrija os seguintes campos:\n'
            let validForm = true
            
            if(validaCPF(userCPF)!=true){
                errorMessage+= 'CPF: Formato inválido\n'
                validForm = false
            }
            if ( passwordVal != confPasswordVal){
                errorMessage+= 'Senha: As senhas não são iguais\n'
                validForm = false
            }if (passwordVal.length < 6 ){
                errorMessage+= 'Senha: A senha precisa ter pelo menos 6 dígitos!\n'
                validForm = false
            }
            if (!validForm){
                alert( errorMessage )
            }else{
                //console.log('Tudo certo para a requisição')
                axios.post(registerURL,{
                    cpf:   userCPF,
                    login: userLogin,
                    nome:  userName,
                    senha: passwordVal
                }).then( res => {
                    if (res.status == 200 ){
                        axios.post(loginURL,{
                            usuario: userLogin,
                            senha: passwordVal
                        }).then( res => {
                            localStorage.setItem('@token', res.data.token)
                            localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                            alert('Cadastro realizado com sucesso!')
                            window.location.replace('#/dashboard')
                            })
                    }
                    // else{
                    //     // console.log( res )
                    //     // console.log( res.status )
                    // }
                    

                })
            }
        })
    }
}

export default SignUp;
//module.exports = postRegisterNewUser();