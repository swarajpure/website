function setNameIfFound(name){
    const userLogin = document.querySelector("#user-login");
    if (name) {
        userLogin.innerHTML = `Hello, ${name}!`;    
    }
};

function fetchData(){
    fetch('https://staging-api.realdevsquad.com/users/self', {
            "credentials": "include"
        })
        .then(res => res.json())
        .then(res => {
            setNameIfFound(res.first_name)
        });
};

window.addEventListener('DOMContentLoaded', fetchData);
