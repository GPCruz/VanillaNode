import IsAuthenticated from '../../service/isAuth.js'

let Dash = {
    render : async () => {
        let view = ''
        let IsAuth = await IsAuthenticated(!localStorage.getItem('@token'), 'login');
        if (IsAuth){
            let userData = JSON.parse(localStorage.getItem('userDataAccount'))
            const { usuario, conta } = userData
            view = `
            <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-md-4 m-auto">
                    <div class="card">
                        <h2 class="mt-5 mb-4 text-center">Olá, ${usuario.nome}</h2>
                        <p>Seu saldo em conta é de: ${conta.saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                    </div>
                </div>
                <div class="col-md-4 m-auto">
                    <div class="card">
                        <h2 class="mt-5 mb-4 text-center">Card 02</h2>
                        <p></p>
                    </div>
                </div>
                <div class="col-md-4 m-auto">
                    <div class="card">
                        <h2 class="mt-5 mb-4 text-center">Card 03</h2>
                        <p></p>
                    </div>
                </div>
                <div class="col-md-12 m-auto">
                    <div class="card">
                        <h2 class="mt-5 mb-4 text-center">Card 04</h2>
                        </form>
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