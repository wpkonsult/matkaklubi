function kuupaevStringina(date) {
    return  date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
}

function matkaRida(matk) {
    return (
        '<div class="col-lg-4 col-md-12 matkarida">' + 
            '<div class="card">' +
                '<img src="' + matk.pilt + '" class="img-fluid matkarida-pilt" alt="">' +
                '<a href="#">' +
            '</a>' +
                '<div class="card-body">' +
                '    <h4 class="card-title">' + matk.nimi + ': ' + kuupaevStringina(matk.kuupaev) + '</h4>' +
                '    <p class="card-text">' + matk.lyhikirjeldus + '</p>' +
                '    <a href="' + matk.matkaleht + '" class="btn btn-primary">Vaata täpsemalt</a>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

const matkad = [
    { 
        nimi: 'Kanuumatk Võhandul', 
        kuupaev: new Date(2020, 06, 10), 
        pilt: './images/matk.png', 
        matkaleht: 'matk1.php?id=1', 
        lyhikirjeldus: 'qpowieurpqoiweuropiu qwoeiur qowpie rqowie ropqiwu eroqi ewrqlwöe rölqwe rölqkjwe rölqjw eröljqwerö' 
    },
    { 
        nimi: 'Rabamatk Laeva rabas', 
        kuupaev: new Date(2020, 08, 12), 
        pilt: './images/golfivaljak.jpg', 
        matkaleht: 'matk1.php?id=2',
        lyhikirjeldus: 'asödlkfaskhfalksdf lkashdf lkas dflkasdflka sdflka sdflkasdlfhasdlfkjhasld fasdf. Asdlfkjasdlfjasld'  
    },
    { 
        nimi: 'Süstaga ümber Hiiumaa', 
        kuupaev: new Date(2020, 10, 10), 
        pilt: './images/systamatk.jpg', 
        matkaleht: 'matk1.php?id=3',
        lyhikirjeldus: 'öflajsdfölkasdf asdflökjasdölfjasö dlfaslödf. afaölksdjföalkjsdf löasdfölkjasd flökjasdf' 
    },
];

let matk = '';

for (i = 0; i < matkad.length; i++) {
    const tana = new Date();
    if (tana < matkad[i].kuupaev) {
        matk += matkaRida(matkad[i]); //matk = matkarida(matkad[i])
    }
}

document.getElementById("matkaandmed").innerHTML = matk;