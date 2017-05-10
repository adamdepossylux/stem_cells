<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=https://services.emi.u-bordeaux.fr/dbserver/;dbname=rgarnaud;charset=utf8', 'rgarnaud', '3.14159265',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}
?>
<h2>Coments</h2>
<?php
$compteur=1;
// On récupère tout le contenu de la table jeux_video
$reponse = $bdd->query('SELECT * FROM comentslp');
while ($donnees = $reponse->fetch())
{
?>
<p>
<strong><?php echo htmlspecialchars($donnees['pseudo']);?></strong> </br> <?php echo htmlspecialchars($donnees['message']); $compteur=$compteur+1?></p></br>

<?php
}
$donnees = $reponse->fetch()
?>
<strong><?php echo htmlspecialchars($donnees['pseudo']);?></strong>  <?php echo htmlspecialchars($donnees['message']);?>
</br>
</br>
<form action="landing_page.php" method="post">
<p>
    <label for="pseudo">Name</label>:<input type="text" name="pseudo"  id="pseudo"/></br>
    </br><textarea name="message" id="message" rows="8" cols="45">
</textarea>
    <input type="submit"/>
<p>
</form>

<?php
if (isset($_POST['pseudo']) AND isset($_POST['message']))
{
$pseudo=$_POST['pseudo'];
$message=$_POST['message'];
$req=$bdd->prepare('INSERT INTO comentslp(pseudo, message) VALUES(:pseudo,:message)');
$req->execute(array(
	'pseudo' => $pseudo,
	'message' => $message,
	));
?><meta http-equiv="refresh" content="0"><?php
}
$reponse->closeCursor(); // Termine le traitement de la requête

?>
