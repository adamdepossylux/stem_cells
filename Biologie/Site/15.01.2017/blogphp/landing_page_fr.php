<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Stem cells and regeneration</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" media="votre requete ici" href="mobile.css" />
        <meta name="viewport" content="width=device-width"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="viewport" content="width=device-width, minimum-scale=0.25"/>
        <meta name="viewport" content="width=device-width, maximum-scale=5.0"/>
        <meta name="viewport" content="width=device-width, target-densitydpi=device-dpi"/>

    </head>

    <body>
	<div id="bloc_page">
		<?php include("header.php"); ?>
		<?php include("menu_fr.php"); ?>

		<section>
<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=dbserver;dbname=rgarnaud;charset=utf8','rgarnaud','72445',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}
?>

<?php
// On récupère tout le contenu de la table jeux_video
$reponse = $bdd->query('SELECT * FROM contenu WHERE nom=\'Origine de la vie\'');
$donnees = $reponse->fetch();
?>
<h2><?php echo $donnees['nom'];?></h2>
</br> <?php echo $donnees['articles'];?></br>
</br> <?php echo $donnees['auteur'];?></br>
<?php
$donnees = $reponse->fetch();
$reponse->closeCursor(); // Termine le traitement de la requête
?>

<?php include("comentsar.php"); ?>
<br/><br/><br/>
		</section>
		<?php include("footer.php"); ?>
	</div>
    </body>
</html>
