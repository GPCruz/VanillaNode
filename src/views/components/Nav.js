let Nav = {
    render : async ( ) => {
        let IsAuth = localStorage.getItem('@token')
        let view = `
            <header class="align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container m-auto" width="100%">
                        <a class="navbar-brand" href="#">
                            <img src="img/bootstrap-5.svg" class="img-fluid" width="200px" alt="">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/dashboard">Dashboard</a>
                                </li>
                                ${!IsAuth?(`
                                <li class="nav-item">
                                    <a class="nav-link" href="#/login">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/signup">SignUp</a>
                                </li>
                                `):''}
                                ${IsAuth?(`
                                <li class="nav-item">
                                    <a id="logout" class="nav-link" href="#">Logout</a>
                                </li>
                                `):''}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `
        return view
    },
    after_render: async ( ) => {
        let IsAuth = localStorage.getItem('@token')
        if (IsAuth){
            // Códigos que dependem de componentes gerados apenas após a autenticação
            document.getElementById('logout').addEventListener('click', function (){
                localStorage.clear()
                window.location.replace('#/login')
            })
        }

    }
}

export default Nav;