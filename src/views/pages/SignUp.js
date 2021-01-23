import baseURL from '../../service/baseURL.js'

document.postRegisterNewUser = async () =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const RegisterData = {
            name: document.getElementById('userName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        
        // const response = await fetch(baseURL, {
        //     method: 'post',
        //     body: JSON.stringify( RegisterData )
        // }).then(
        //     res => {
                
        //     }
        // )

        
        axios.post(baseURL, RegisterData, options).then(
            res => {
                console.log(res.data)
            }
        )
        console.log(JSON)
        return JSON
    } catch(err){
        console.log('Ocorreu um erro: ', err)
    }
}

let postFunction = {}

let SignUp = {
    render : () => {
        //window.postData = postRegisterNewUser();
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
                        <label for="exampleInputEmail1">Nome de usuário</label>
                        <input id="userName" type="text" class="form-control  mb-4">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Seu email</label>
                        <input id="email" type="email" class="form-control  mb-4">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input id="password" type="password" class="form-control  mb-4">
                    </div>
                    <div class="form-group">
                        <label for="senha">Confirme a senha</label>
                        <input id="confPassword" type="password" class="form-control  mb-4">
                    </div>
                    <div class="form-group form-check mb-4">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="manter">Me mantenha conectado</label>
                    </div>
                    <button onclick="postRegisterNewUser()" id="submit_new_register" type="submit" class="btn btn-primary">Clique aqui para se registrar</button>
                </form>
            </div>
        </div>
    </div>
        `
        return view
    },
    after_render: async() => {
        document.getElementById('submit_new_register').addEventListener('click', () =>{
            let userName = document.getElementById('userName').value,
                userMail = document.getElementById('email').value,
                passwordVal = document.getElementById('password').value,
                confPasswordVal = document.getElementById('confPassword').value
                
            if (passwordVal === confPasswordVal){
                console.log('Tudo certo para a requisição')
                axios.post(baseURL,{
                    name: userName,
                    email: userMail,
                    password: passwordVal
                }).then( res => {
                    console.log(res.data)
                    
                    localStorage.setItem('@token', res.data.token)
                    sessionStorage.setItem('@token', res.data.token)
                    //Cookie.set('@token', res.data.token, {expires: 7})
                })
            }
            
            // if ( passwordVal =! confPasswordVal){
            //     alert('As senhas não são iguais!')
            // }
            // if (toString(passwordVal).length < 6 ){
            //     console.log('Senha maior que 6')
            // } else {
            //     alert('A senha precisa ter pelo menos 6 dígitos!')
            // }
        })
    }
}

export default SignUp;
//module.exports = postRegisterNewUser();