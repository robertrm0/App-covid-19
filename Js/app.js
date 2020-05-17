

const linkApi = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'


// llamar api
fetch(linkApi)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        htmlRes = '';

        datos.forEach(paises => {
            htmlRes += `
                <div class="card text-white" id="tarjeta" >
                    <div class="card-body">
                        <div >
                            <h4 class="card-title">
                                <span class="">
                                    Pais:
                                </span>
                                ${paises.countryregion}
                            </h4>
                            <h5 class="card-title">
                                <span class="">
                                    Estado/Provincia:
                                </span>
                                ${paises.provincestate}
                            </h5>
                            <h6 class="card-subtitle mb-2">
                                <span class="text-white">
                                    Ultima actualizacion:
                                </span>
                                ${paises.lastupdate}
                            </h6>                        
                        </div>
                        <div class="" id="da">
                            <p class="card-text m-0 text-warning ">
                                <span class=" text-white">Confirmados:</span>
                                ${paises.confirmed} 
                            </p>
                            <p class="card-text m-0 text-danger">
                                <span class=" text-white">Muertes: </span>
                                ${paises.deaths} 
                            </p>
                            <p class="card-text r m-0 text-success " >
                                <span class=" text-white">Recuperados:</span>
                                ${paises.recovered} 
                            </p>
                        </div>
                    </div>
                </div>
            
            `;
        })

        document.querySelector('.paises').innerHTML = htmlRes

    })



    // <a href="#" class="card-link">Card link</a>
    // <a href="#" class="card-link">Another link</a>

const btnDominicana = document.querySelector('#btnDom')
btnDominicana.addEventListener('click', domRespuesta)

const linkDom = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=DO&iso3=DOM'

function domRespuesta() {
    fetch(linkDom)
        .then(respuesta => {
            return respuesta.json();
        } )
        .then(data => {
            let htmlDOP = '';

            data.forEach(domi => {
                htmlDOP += `
                    <div class="card text-white" id="tarjeta" >
                    <div class="card-body">
                        <div >
                            <h4 class="card-title">
                                <span class="">
                                    Pais:
                                </span>
                                ${domi.countryregion}
                            </h4>
                            <h5 class="card-title">
                                <span class="">
                                    Estado/Provincia:
                                </span>
                                ${domi.provincestate}
                            </h5>
                            <h6 class="card-subtitle mb-2">
                                <span class="text-white">
                                    Ultima actualizacion:
                                </span>
                                ${domi.lastupdate}
                            </h6>                        
                        </div>
                        <div class="" id="da">
                            <p class="card-text m-0 text-warning ">
                                <span class=" text-white">Confirmados:</span>
                                ${domi.confirmed} 
                            </p>
                            <p class="card-text m-0 text-danger">
                                <span class=" text-white">Muertes: </span>
                                ${domi.deaths} 
                            </p>
                            <p class="card-text r m-0 text-success " >
                                <span class=" text-white">Recuperados:</span>
                                ${domi.recovered} 
                            </p>
                        </div>
                    </div>
                </div>
                `;
            }) 
            document.querySelector('.paises').innerHTML = htmlDOP
        })

}