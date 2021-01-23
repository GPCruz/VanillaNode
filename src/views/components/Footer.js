let Footer = {
    render : async( ) => {
        let view = `
            <div class="my-5 pt-5 text-muted text-center text-small">
                <p>© Copyrigth 2021</p>
            </div>
        `
        return view
    },
    after_render: async( ) => {

    }
}

export default Footer;