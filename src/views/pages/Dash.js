let IsAuthenticated = async => {
    if (!localStorage.getItem('@token')){
        console.log('Não autenticado')
        window.location.replace('#/login')
    } else {
        console.log('Autenticado')
    }

}

let Dash = {
    render : async () => {
        let IsAuth = IsAuthenticated();
        let view = `
        <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-md-4 m-auto">
                <div class="card">
                    <h2 class="mt-5 mb-4 text-center">Card 01</h2>
                </div>
            </div>
            <div class="col-md-4 m-auto">
                <div class="card">
                    <h2 class="mt-5 mb-4 text-center">Card 02</h2>
                </div>
            </div>
            <div class="col-md-4 m-auto">
                <div class="card">
                    <h2 class="mt-5 mb-4 text-center">Card 03</h2>
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
        return view
    },
    after_render: async () => {

    }
}

export default Dash;