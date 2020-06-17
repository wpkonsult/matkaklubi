<?php
function tagastaViga($veateade) {
    header("Content-Type: application/json");
    http_response_code(400);
    echo '{"jsonError":"' 
        . $veateade 
        . '"';
}

function tagastaAndmed($jsonTekst) {
    header("Content-Type: application/json");
    echo $jsonTekst;
}

include '../../matk-komponendid.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $DEBUG[] = 'request data: ' . $data;
    if ($lisatudId && false) {
        tagastaAndmed(
            json_encode(
                [
                    'lisatudMatkId' => $lisatudId
                ]
            )
        );
    } else {
        tagastaViga('Lisamine ebaõnnestus');
    }

} else {    
    $data = loeMatkaAndmed($_GET['id'] ?? false);
    
    $json = json_encode($data);
    if ($json === false) {
        $json = json_encode(["jsonError" => json_last_error_msg()]);
        if ($json === false) {
            $json = '{"jsonError":"unknown"}';
        }
        tagastaViga($json);
    } else {
        tagastaAndmed($json);
    }
}

