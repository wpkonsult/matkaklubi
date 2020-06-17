function kuupaevStringina(date) {
    return  date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
}

function matkaRidaHTML(matk) {
    return (
        '<div class="col-lg-4 col-md-12 matkarida">' + 
            '<div class="card">' +
                '<img src="' + matk.pilt1 + '" class="img-fluid matkarida-pilt" alt="">' +
                '<a href="#">' +
            '</a>' +
                '<div class="card-body">' +
                '    <h4 class="card-title">' + matk.nimetus + ': ' + matk.alguskuup + '</h4>' +
                '    <p class="card-text">' + matk.kirjeldus + '</p>' +
                '    <a href="matk1.php?id=' + matk.id + '" class="btn btn-primary">Vaata täpsemalt</a>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

document.getElementById("matkaandmed").innerHTML = 'Loen matkade andmeid ...';

function matkadHTML(matkad) {
    let matkHtml = '';

    for (i = 0; i < matkad.length; i++) {
        //const tana = new Date();
        //if (tana < matkad[i].kuupaev) {
            matkHtml += matkaRidaHTML(matkad[i]);
        //}
    }
    return matkHtml;
}

function loeMatkad() {
    $.get(
        'api/matkad/',
        function(andmed, status) {
            document.getElementById("matkaandmed").innerHTML = matkadHTML(andmed);
        }
    );
}

loeMatkad();