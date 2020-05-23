<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Php-mitmes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<?php

echo "<ul>";
$juurikad = ["tomat", "kurk", "kapsas", "kaalikas", "porgand"];
foreach ($juurikad as $vili) {
    echo "<li>$vili</li>";
}
echo "</ul>";

$aadressid = [
    "http://nort.ee",
    "http://delfi.ee",
    "http://postimees.ee"
];

echo "<ul>";
foreach ($aadressid as $veebileht) {
    echo "<li><a href='$veebileht'>$veebileht</a></li>";
}
echo "</ul>";

?>
</body>
</html>