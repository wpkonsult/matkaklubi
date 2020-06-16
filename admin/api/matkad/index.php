<?php
include '../api-komponendid.php';
include '../../../matk-komponendid.php';

$matkad = loeMatkaAndmed($_GET['id']);

if (count($matkad) > 0) {
    tagastaAndmed(json_encode($matkad));
} else {
    tagastaViga('Matka andmeid ei leitud');
}