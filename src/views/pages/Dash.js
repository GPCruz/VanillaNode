import IsAuthenticated from '../../service/isAuth.js'
import baseURL from '../../service/baseURL.js'

const RequestDataAccount = async () => {

    let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
    let {token, usuario:{login} } = dataUser    

    let headersDefault = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }

    const response = await axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, headersDefault)
    
    const allData = response.data
    // .then(
    //     res => {
    //         let ReturnData = res.data;
    //         const Montacomponents = ReturnData.map( data => (`
    //         <div class="card" style="width: 100%;">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${data.descricao}</h5>
    //                     <h6 class="card-subtitle mb-2 text-muted">${data.login}</h6>
    //                     <p class="card-text">Text</p>
    //                     <a href="#" class="card-link">Card link</a>
    //                     <a href="#" class="card-link">Other link</a>
    //                 </div>
    //             </div>
    //         `))
    //     }
    // )
}

let Dash = {
    render : async () => {
        let ComponentsData = await RequestDataAccount()
        let userData = JSON.parse(localStorage.getItem('userDataAccount'))
        const { usuario: { nome }, conta } = userData
        
        //let fullName = nome.split(' ')
        let IsAuth = await IsAuthenticated(localStorage.getItem('@token'));
        let view = ''
        if (IsAuth){
            let userData = JSON.parse(localStorage.getItem('userDataAccount'))
            const { usuario, conta } = userData
            view = `
            <div class="container">
            <h1>Olá, ${usuario.nome}</h1>
            <div class="row align-itens-center mt-5 mb-5 justify-content-between">
                <div class="card col-md-3  col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Seu saldo em conta é de: ${conta.saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-md-3  col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-md-3  col-sm-12">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        return view
    },
    after_render: async () => {
        
    }
}

export default Dash;