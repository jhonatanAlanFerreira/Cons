<?php
$json = file_get_contents("php://input");

$params = json_decode($json);

?>

ts{
    this.http.post(this.URL+"sendUser.php", JSON.stringify(usuario));
}