# Matkaklubi õppesait
See on harjutusprojekt HTML/CSS/PHP ja Javascripti õppimiseks.
Projekt on ettekujutatava matkaklubi koduleht, millel avalikustatakse
matkade kohta käivat infot. Veebilehe külastajad saavad registreeruda
matkadele

Matkade administreerimiseks ja registeerimiste vaatamiseks on omaette leht (admin).

## Eeldused
- Sul peab olema tühi MySQL andmebaas ning ligipääs sellele phpMyAdmin vahendiga või
muu võimalus  andmebaasi tabeleid luua skripti abil.
- Veebiserver, millele sul on FTP ligipääs.

## Installeerimine
Klooni endale see repo.

### Andmebaasin installeerimine
Loome andmebaasi SQL skriptiga. Selleks ava andmebaas phpMyAdminiga ja impordi 
andmebaasiskirpt failist /sql/matkaklubi.sql

### Andmebaasi ühenduse konfigureerimine
Kopeeri fail /matk-seaded-naide.php failiks /matk-seaded.php
Asenda funktsiooni annaSaladused tagastavas objektis MySQL ühenduse loomiseks sinu andmebaasi infoga. 
Ehk - asneda servername, username, password, dbname muutujate väärtused.

### Lae faili sisu veebiserverisse
FTP abil lae terve projekt veebiserverisse. 

Kui laadisid FTP faili enda serverisse (näiteks minu.server.ee), siis 
- matkaklubi esileht asub aadressil [minu.server.ee/matkaklubi](minu.server.ee/matkaklubi)
- admin - leht asub aadressil [minu.server.ee/matkaklubi/admin](minu.server.ee/matkaklubi/admin)
