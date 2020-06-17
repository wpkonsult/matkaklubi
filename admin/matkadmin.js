var andmed = {
    matkad: [],
    registeerumised: [],
}

function salvestaMatkad(matkaAndmed) {
    andmed.matkad = matkaAndmed.map(
        function(yksMatk) {
            return yksMatk;
        });
}

function salvestaRegistreerumised(regAndmed) {
    andmed.registeerumised = regAndmed.map(
        function(yksReg) {
            return yksReg;
        }
    );
}

function matkaRidaHtml(matk) {
    return `
    <div class="col-md-6">
    <div class="card" style="width:400px">
        <div class="card-body">
            <h4 class="card-title">${matk.nimetus} ${matk.alguskuup}</h4>
            <p class="card-text">${matk.kirjeldus}</p>
            <a href="#" class="btn btn-primary">Muuda</a>
            <a href="#" class="btn btn-primary">Kustuta</a>
            <a href="#" 
                onclick="loeRegistreerimised(${matk.id})" 
                class="btn btn-primary"
            >
                Registreerumised
            </a>
        </div>
        <img class="card-img-bottom" src="../${matk.pilt1}" alt="Card image" style="width:100%">
      </div>
</div>    
`;
}

function regRidaHtml(yksReg) {
    var markusElem = '';
    if (yksReg.markused) {
        markusElem = `
            <div>
                Märkused: ${yksReg.markused}
            </div>
        `;
    }
    return `
    <li class="list-group-item" class="regRida" id="regRida${yksReg.id}"> 
        <div>
            Nimi: ${yksReg.nimi}, Email: ${yksReg.email}, Telefon: ${yksReg.telefon || ''}
        </div>
        ${markusElem}
    </li>
    `;
}

function registreerumisedHtml(reg) {
    var read = '';
    for (i=0; i < reg.length; i++) {
        read += regRidaHtml(reg[i]);
    }
    return `
    <div class="row vaatemenyy">
        <a  
            href="#" 
            onclick="naitaVaadet(matkadHTML(andmed.matkad))" 
            class="btn btn-secondary"
        >
            Matkad
        </a>
    </div>
    <div class="row">
        <ul class="list-group list-group-flush">
            ${read}
        </ul>        
    </div>
    `;
}

function matkadHTML(matkad) {
    var kaardid = '';
    for (i=0; i < matkad.length; i++) {
        kaardid += matkaRidaHtml(matkad[i]);
    }

    return vaade = `
    <div class="row vaatemenyy">
        <a 
            href="#" 
            class="btn btn-primary"
            onClick="naitaVaadet(matkaMuutmineHTML())"
        >
            Lisa matk
        </a>
    </div>
    <div class="row">
        ${kaardid}
    </div>
    `;
}

function matkaMuutmineHTML(matk = false) {
    var tegevus = 'Lisa matk';
    var nuppTeks = 'Lisa';
    var kinnitamine = 'lisaMatk()';
    if (matk) {
        tegevus = 'Muuda matka';
        nuppTeks = 'Muuda';
        kinnitamine = 'muudaMatka()';
    }

    return vaade = `
    <div class="row vaatemenyy">
        <div class="container">
            <a  
                href="#" 
                onclick="naitaVaadet(matkadHTML(andmed.matkad))" 
                class="btn btn-outline-secondary"
            >
                Matkad
            </a>
        </div>
    </div>
    <div class="container">
        <h2>${tegevus}</h2>
            <form id="vormMatk" onsubmit="event.preventDefault()">
                <div class="form-group">
                    <label for="matkNimi">Matka nimetus </label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="matkNimi" 
                        name="nimi" 
                        required
                    />
                    <label for="matkAlguskuup">Matka alguskuupäev </label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="matkAlguskuup" 
                        name="alguskuup"
                        required
                    />
                    <label for="matkPilt1">Viide matka peapildile </label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="matkPilt1" 
                        name="pilt1"
                        required
                    />
                    <label for="matkPilt2">Viide matka täiendavale pildile </label>
                    <input 
                        class="form-control" 
                        type="text" 
                        id="matkPilt2" 
                        name="pilt2"
                    />
                    <label for="kirjeldus">Kirjeldus</label>
                    <textarea 
                        class="form-control"
                        rows=5
                        id="kirjeldus"
                        name="kirjeldus"
                    ></textarea>
                </div>
                <button 
                    class="btn btn-primary"
                    onClick="${kinnitamine}"
                >
                    ${nuppTeks}
                </button> 
            </form>
        </div>
    </div>
    `;

}

function naitaVaadet(vaade) {
    document.getElementById("vaade").innerHTML = vaade;
}

function loeMatkad() {
    $.get(
        'http://wpkonsult.ee/oppurid/veeb30/matkaklubi/admin/api/matkad/',
        function(andmed, status) {
            console.log('Staatus: ' + status);
            salvestaMatkad(andmed);
            naitaVaadet(matkadHTML(andmed));
        }
    );
}

function loeRegistreerimised(matkId) {
    $.get(
        'http://wpkonsult.ee/oppurid/veeb30/matkaklubi/admin/api/registreerumised?matkId=' + matkId,
        function(andmed, status) {
            console.log(andmed);
            salvestaRegistreerumised(andmed);
            naitaVaadet(registreerumisedHtml(andmed));
        }
    );
}

function lisaMatk() {
    console.log('Lisa matka andmed');
    var vormMatkAndmed = $('#vormMatk').serializeArray();
    console.log(vormMatkAndmed);
    $.ajax({  
        type: "POST",  
        url: "api/matkad/",  
        data: vormMatkAndmed,  
        success: function(value) {  
            console.log(value);
            //loeMatkad();
        }
    });

}

loeMatkad();
