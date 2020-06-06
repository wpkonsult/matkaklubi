<?php
function annaMenyy() {
return '    
<ul class="peamenyy"> 
    <li>' .
'      <a href=".">Esileht</a>' .
'    </li>' .
'    <li>' .
'      <a href="#">Järgmised matkad</a>' .
'    </li>' .
'    <li>' .
'      <a href="matk-kontakt.php">Kontakt</a>' .
'    </li>' .
'  </ul>
';
}

function saadaEmail($andmed) {
    $nimi = $andmed['nimi'];
    $email = $andmed['email'];
    $sonum = "
    Tere

    Kontakti võttis $nimi.
    Kirjuta talle: $email.

    parimatega,
    Sinu Koduleht
    ";
    mail('andresjarviste@gmail.com', 'Kontakt', $sonum);

}

function annaAndmebaasiyhendus() {
    $servername = "d55765.mysql.zonevs.eu";
    $username = "d55765_matkaklub";
    $password = "p6randaLamp7";
    $dbname = "d55765_matkaklubi";

    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
      die("Ühendamine ebaõnnestus: " . $conn->connect_error);
    }

    return $conn;
}

function salvestaKontaktid($andmed) {
    $mysqli = annaAndmebaasiyhendus();
    $nimi = $mysqli->real_escape_string($andmed['name']);
    $email = $mysqli->real_escape_string($andmed['email']);
    $sql = "INSERT INTO kontaktid (nimi, email) 
        VALUES ('$nimi', '$email')
    ";

    return lisaAndmeRida($sql, $mysqli);
}



function loeMatkaAndmed($matkId) {
    $mysqli = annaAndmebaasiyhendus();
    $id = $mysqli->real_escape_string($matkId);
    $sql = " SELECT id, nimetus, kirjeldus, alguskuup, pilt1, pilt2 
        FROM matkad WHERE id = $id
    ";
    $tulemus = $mysqli->query($sql);

    $tagasi = [];

    if ($tulemus->num_rows > 0) {
        while($rida = $tulemus->fetch_assoc()) {
            $tagasi[] = $rida;
        }
    }

    $mysqli->close();
    return $tagasi;
}

function salvestaRegistreerimine($andmed) {
    $mysqli = annaAndmebaasiyhendus();
    $nimi = $mysqli->real_escape_string($andmed['nimi']);
    $email = $mysqli->real_escape_string($andmed['email']);
    $markused = $mysqli->real_escape_string($andmed['markused']);    
    $matkId = $mysqli->real_escape_string($andmed['matkId']);

    $sql = "INSERT INTO registreerumised (matk_id, nimi, email, markused)
        VALUES ('$matkId', '$nimi', '$email', '$markused')
    ";

    $lisatudRida = lisaAndmeRida($sql, $mysqli);
    return $lisatudRida;
}

function lisaAndmeRida($sql, $mysqli) {
    $id = 0;
    if ($mysqli->query($sql)) {
        $id = $mysqli->insert_id;
    } 

    $mysqli->close();
    return $id;    
}

