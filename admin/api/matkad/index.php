<?php
include '../api-komponendid.php';
include '../../../matk-komponendid.php';

function tagastaMatkad() {
    $matkad = loeMatkaAndmed($_GET['id'] ?? false);
    
    if (count($matkad) > 0) {
        tagastaAndmed(json_encode($matkad));
    } else {
        tagastaViga('Matka andmeid ei leitud');
    }
}

function lisaUusMatk() {
    $lisatudId = lisaMatk([
        'nimetus' => $_POST['nimi'],
        'kirjeldus' => $_POST['kirjeldus'],
        'alguskuup' => $_POST['alguskuup'],
        'pilt1' => $_POST['pilt1'],
        'pilt2' => $_POST['pilt2'],
    ]);

    if ($lisatudId > 0) {
        tagastaAndmed(json_encode(['matkId' => $lisatudId]));
    } else {
        tagastaViga('Matka lisamine ebaõnnestus');
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    lisaUusMatk();
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    tagastaMatkad();
} else {
    tagastaViga('Tundmatu tegevus: ' . $_SERVER['REQUEST_METHOD']);
}
