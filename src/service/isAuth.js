let IsAuthenticated = async (auth) => {
    let authenticated = auth!=null
    if ((!authenticated)&&(window.location.hash != '#/signup')) {
            window.location.replace("#/login");
    }
    return authenticated
};

export default IsAuthenticated;
