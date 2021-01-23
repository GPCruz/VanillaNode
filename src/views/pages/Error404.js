let Error404 = {
    render : () => {
        let view = `
        <div class="container">
            <h1>Oop! Houve um erro...</h1>
        </div>
        `
        return view
    },
    after_render: () => {

    }
}

export default Error404;