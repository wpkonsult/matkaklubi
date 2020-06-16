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