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