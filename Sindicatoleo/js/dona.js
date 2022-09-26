fetch("../json/DB.json")
    .then(res => res.json())
    .then(data => setTimeout(() => {
        let suma = 0
        for (u of data.usuarios) {
            suma += u.donacion
            console.log(suma)
        }
        let consultaDona = document.querySelector(".donacion")
        let contenedorDona = document.createElement("div")
        contenedorDona.innerHTML = `<h2 class="h2Dona"> Plata donada: </h2>
            <p class="h2Dona"> ${suma} </p>`
        consultaDona.appendChild(contenedorDona);
    }, 2000))