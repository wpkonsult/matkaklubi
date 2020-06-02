<!DOCTYPE html>
<html lang="en">

<head>
  <title>Matkaklubi</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/matkaklubi.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body>
  <div class="container-fluid">
    <div class="row" id="section-header">
      <div class="container">
        <div class="row" id="section-header-row">
          <div class="col-md-4">
            <span class="Logo">
              <img src="./images/matkaklubi_logo.PNG" width="67px">
            </span>
            <span class="logotekst">
              <?
                echo 'MATKAKLUBI KÕIGILE ';
              ?>
            </span>
          </div>
          <div class="col-md-8">
            <?php
include 'matk-komponendid.php';
echo annaMenyy();
?>
          </div>
        </div>
        <div class="row caption-row">
          <div class="col-md-6">
            <div class="caption1">
              <span>LIIGUTA ENNAST</span>
              <div class="butterfly1"></div>
            </div>
            <div class="caption2">
              <div class="butterfly2"></div>
              <span>TULE MATKAMA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="sektsioon-matkainfo">
      <div class="container" >
          <div class="row" id="matkadetailid">
                Tere <?php echo $_POST["name"]; ?><br>
                Sinu emaili aadress on: <?php echo $_POST["email"]; ?>
                <?php
                  saadaEmail($_POST);
                  salvestaKontaktid($_POST);
                ?>
          </div>
      </div>
    </div>
  </div>

  <script src="./matkaklubi.js"></script>
</body>

</html>