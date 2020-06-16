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
    <a href="#" onclick="naitaVaadet(matkadHTML(andmed.matkad))" class="btn btn-primary">Matkad</a>
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
        <a href="#" class="btn btn-primary">Lisa matk</a>
    </div>
    <div class="row">
        ${kaardid}
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

loeMatkad();
