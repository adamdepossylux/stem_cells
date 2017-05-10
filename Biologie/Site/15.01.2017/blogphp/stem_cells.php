<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css" />
        <title>Stem cells and regeneration</title>
	<meta name="viewport" content="width=device-width"/>
	<link rel="stylesheet" media="votre requete ici" href="mobile.css" />
    </head>

    <body>
	<div id="bloc_page">
		<?php include("header.php"); ?>
		<?php include("menu.php"); ?>

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
$reponse = $bdd->query('SELECT * FROM contenu WHERE nom=\'Stem cells definition\'');
$donnees = $reponse->fetch();
?>
<h2><?php echo $donnees['nom'];?></h2>
<p><br>Publication date : <?php echo $donnees['date'];?></br></p>
</br> <?php echo $donnees['articles'];?></br>
</br> Authors : <?php echo $donnees['auteur'];?></br>
<?php
$donnees = $reponse->fetch();
$reponse->closeCursor(); // Termine le traitement de la requête
?>


<?php include("comentss.php"); ?>
    <br/><br/>
    </div>
    <br/><br/><br/><br/><br/><br/> 
		</section>
		<?php include("footer.php"); ?>
	</div>
    </body>
</html>
