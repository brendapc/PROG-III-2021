function addTicket(){
    const flightid = parseInt(document.getElementById('flightid').value)
    const destination = document.getElementById('destination').value
    const origin = document.getElementById('origin').value
    const cia = document.getElementById('cia').value
    const departure = document.getElementById('departure').value
    const arrival = document.getElementById('arrival').value
    const price = parseInt(document.getElementById('price').value)

    fetch('http://localhost:8989/tickets/',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                flightid,
                destination,
                origin,
                cia,
                departure,
                arrival,
                price,
                userid: 'aa9b01da-9820-46a1-aa8a-d8fbcb3c0f1d'
            })
    })
}