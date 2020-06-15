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

    if (!$conn->set_charset("utf8")) {
        die("Error loading character set utf8: %s\n". $conn->error);
        exit();
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

function loeMatkaAndmed($matkId = false) {
    $mysqli = annaAndmebaasiyhendus();
    $sql = " SELECT id, nimetus, kirjeldus, alguskuup, pilt1, pilt2 
        FROM matkad";
    if ($matkId) {
        $id = $mysqli->real_escape_string($matkId);
        $sql = $sql . " WHERE id = $id";
    }
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

function lisaMatk($andmed) {
    $mysqli = annaAndmebaasiyhendus();
    $nimetus = $mysqli->real_escape_string($andmed['nimetus']);
    $kirjeldus = $mysqli->real_escape_string($andmed['kirjeldus']);
    $alguskuup = $mysqli->real_escape_string($andmed['alguskuup']);    
    $pilt1 = $mysqli->real_escape_string($andmed['pilt1']);
    $pilt2 = $mysqli->real_escape_string($andmed['pilt2']);

    $sql = "INSERT INTO matkad (nimetus, kirjeldus, alguskuup, pilt1, pilt2)
        VALUES ('$nimetus', '$kirjeldus', '$alguskuup', '$pilt1', '$pilt2')
    ";

    $lisatudRida = lisaAndmeRida($sql, $mysqli);
    return $lisatudRida;

}

