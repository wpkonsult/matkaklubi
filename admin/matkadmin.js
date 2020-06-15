const reg = [
    {
        matkId: '1',
        nimi: 'Mati Maasikas',
        email: 'mati@sdasd.ee',
        telefon: '234234',
        markused: 'Tahan enda padja kaaas võtta'
    },
    {
        matkId: '1',
        nimi: 'Kati Murakas',
        email: 'kati@sdasd.ee',
        telefon: '2312 313',
        markused: 'Tahan enda teki kaaas võtta'
    },
    {
        matkId: '1',
        nimi: 'Uudo Murakas',
        email: 'uudo@sdasd.ee',
        telefon: '2312 313',
        markused: ''
    },
];

function matkaRidaHtml(matk) {
    return `
    <div class="col-md-6">
    <div class="card" style="width:400px">
        <div class="card-body">
          <h4 class="card-title">${matk.nimetus} ${matk.alguskuup}</h4>
          <p class="card-text">${matk.kirjeldus}</p>
          <a href="#" class="btn btn-primary">Muuda</a>
          <a href="#" class="btn btn-primary">Kustuta</a>
          <a href="#" onclick="naitaVaadet(registreerumisedHtml(reg))" class="btn btn-primary">Registreerumised</a>
        </div>
        <img class="card-img-bottom" src="../${matk.pilt1}" alt="Card image" style="width:100%">
      </div>
</div>    
`;
}

function regRidaHtml(yksReg) {
    return `<p>Tee sellest registreerumise andmete rida --> Nimi: ${yksReg.nimi}</p>`;
}

function registreerumisedHtml() {
    var read = '';
    for (i=0; i < reg.length; i++) {
        read += regRidaHtml(reg[i]);
    }
    return `
        
        <div class="row">
            <p>Siia tulevad registeerumiste andmed</p>
            ${read}
        </div>
    `;
}

function matkadHTML(matkad) {
    var kaardid = '';
    for (i=0; i < matkad.length; i++) {
        kaardid += matkaRidaHtml(matkad[i]);
    }

    return vaade = `
    <div class="row">
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
            console.log(status);
            console.log(andmed);
            naitaVaadet(matkadHTML(andmed));
        }
    );
}

loeMatkad();
//naitaVaadet(registreerumisedHtml(reg));


