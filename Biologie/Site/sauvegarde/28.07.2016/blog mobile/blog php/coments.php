<?php 

$coments = fopen('texte/coments','a+');
if (isset($_POST['message'])) 
{
	//fputs($coments,$_POST['pseudo']);
	//fputs($coments,"\n");
	fputs($coments,$_POST['message']);
	fputs($coments,"\n");
}
fseek($coments, 0);
while (!feof($coments))
{
	//$pseudo = fgets($coments);
	$line = fgets($coments);
	//echo "<strong>$pseudo<strong\>";
	echo "<br>";	
	echo $line;
	echo "<br>";	
}
fclose($coments);
/*<p>Veuillez taper votre pseudo : </p>
<form action="anmimal_regeneration.php" method="post">
<p> 
    <input type="text" name="pseudo" />
<input type="submit" value="Valider" />
</p>*/
?>

<form action="anmimal_regeneration.php" method="post">
<textarea name="message" rows="8" cols="45">
</textarea>
<input type="submit" value="Valider" />
<p/>
<?php 
/*	echo "$_POST['pseudo']";
	echo "<br>";	
	echo "$_POST['message']";
	echo "<br>";*/
?>
