<?php
include '../api-komponendid.php';
include '../../../matk-komponendid.php';

$registreerumised = loeMatkaRegistreerumised($_GET['matkId']);

if (count($registreerumised) > 0) {
    tagastaAndmed(json_encode($registreerumised));
} else {
    tagastaViga('Matkale registreerumisi ei leitud');
}