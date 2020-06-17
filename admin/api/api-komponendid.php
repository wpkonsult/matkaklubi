<?php
error_reporting(E_ALL); 
ini_set('ignore_repeated_errors', TRUE);
ini_set('display_errors', TRUE);
ini_set('log_errors', TRUE);
ini_set("error_log", "php-error.log");

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