let Home = {
    render : () => {
        let view = `
        <div class="container">
        <div class="row mt-5 mb-5">
        <div class="col-md-6 m-auto">
        <div class="container">
            <h2 class="mt-5 mb-4 text-center">Seja bem vindo!</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus efficitur, vulputate libero in, dapibus libero. Donec velit felis, posuere in tellus vel, congue pellentesque odio. Mauris imperdiet euismod arcu, ac suscipit sapien lacinia sodales. Etiam venenatis nisi nec libero tincidunt, et convallis leo auctor. Curabitur pellentesque libero quis scelerisque mattis. Mauris pellentesque enim ac tincidunt posuere. Ut finibus, elit eu accumsan fringilla, sapien ipsum ultricies ex, et malesuada elit ante sit amet lectus. Donec venenatis sollicitudin libero eu tincidunt. Cras sit amet finibus nunc. Nulla dapibus pharetra purus id malesuada. Nam maximus tellus eget arcu scelerisque molestie. Integer nunc urna, laoreet id tellus sit amet, dignissim congue odio.
            </p>
        </div>
        </div>
        <div class="col-md-6 m-auto">
                <img src="img/bootstrap-icons.png" class="img-fluid m-auto" width="100%" alt="Imagem resposiva">
            </div>
            
        </div>
    </div>
        `
        return view
    },
    after_render: () => {

    }
}

export default Home;