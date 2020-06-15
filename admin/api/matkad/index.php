<?php
function tagastaAndmed($jsonTekst) {
    header("Content-Type: application/json");
    echo $jsonTekst;
}

function tagastaViga($veateade) {
    header("Content-Type: application/json");
    http_response_code(402);
    $viga = [ 'jsonError' => $veateade];
    echo json_encode($viga);
}

include '../../../matk-komponendid.php';
$matkad = loeMatkaAndmed($_GET['id']);

if (count($matkad) > 0) {
    tagastaAndmed(json_encode($matkad));
} else {
    tagastaViga('Matka andmeid ei leitud');
}