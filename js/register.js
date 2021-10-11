function registrar(e){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const passwordConfirmation = document.getElementById('passwordConfirmation').value

        fetch('http://localhost:8989/users/',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                userid: Math.random()
            })
        })
}