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
    <h2> Stem cells definition</h2>

    <h3>Summary</h3>
    
    <p> Stem cells are able to replicate themselves into <a href="#self_renewal">identical cells</a>, but they also can <a href="#differentiation">differentiate </a> into one or several  tissues according to their types and the environment. Indeed the diffrence between stem cells and differentiated ones is the ability of multiple divisions.</p>
    <h3 id="different_types"> Different types </h3>

<p>There is differents types of stem cells, corresponding to different states of différentiation.</p>
    <figure>
    	<img src="images/different_types.png" title=""/>
    	<figcaption>
    </figure>
<h4>Totipotent</h4>
<p>Totipotent cells are able to différenciate in every type of cell, and to create a full organism. But they can't renew indefinetly, a culture of totipotent cells will turn into a pluripotent cells culture after a few mitoses, that's why totipotent cells are not really stem cells.
the first cells of an embryo are totipotent cells.</p>
<h4>Pluripotent cells</h4>
<p>Pluripotent cells are able to differenciate in almost every type of cells, without some specifics embryonic cells ( placenta cells ), so pluripotent cells can't create a full organism like totipotent cells.</p>
<h4>Multipotent cells</h4>
<p>Pluripotent cells are able to differenciate in differents cells, but cells with commun caracteristics ( blood cells, cells specifics to an organ ...).
Multipotent cells are more specialised and specifics than pluripotent cells, and generaly, a type of multipotent stem cell is associated to an organ or a part of the body.</p>
<h4>Unipotent cells</h4>
<p>Unipotent stem cells are able to replicate and renew indefinitly, but they can only differenciate into one specific cell, unipotent cells renew a specific population of cells. unipotent cells are the last differentiation step, before the final cell.</p>

    <h3 id="self_renewal"> Self renewal </h3>
    <h4>Telomerase</h4>
    
    <p>Actually at each division, there is a loss of a small part at the end of the chromosome, it is called the <a href="before_replication">telomere </a>. And stem cells replicates many times in their all life, indeed they need an enzyme that rebulid this telomere, this one is named telomerase.</p>
    
    <h5 id="before_replication">Before replication</h4>
    <p>On this picture, both situation are represented : when there is effective telomerase and telomere is rebuilt on the left and when there isn't telomerase and in this case chromosome is shorter.<p>
    <figure>
    	<img src="images/telomerase1.png" title=""/>
    	<figcaption>
    </figure>
    <h5 id="positioning_telomerase">Positioning of telomerase</h4>
    <p>Before intervention of telomerase the chromosome of the daughter cell is shorter than the mother's one. Then the telomerase comes with its strand of RNA.</p>
    <figure>
    	<img src="images/telomerase2.png" title=""/>
    	<figcaption>
    </figure>
    <h5 id="DNA_polymerase">DNA polymerase</h4>
      <p>Then de DNA polymerase complete the chromosome strand with complementary nucleotides with the telomere RNA strand.<p>
    <figure>
    	<img src="images/telomerase4.png" alt=""/>
    	<figcaption></figcaption>
    </figure>
    <h4 href="niches"> Niches </h4>
A niche is a local tissue, a kind of microenvironments, where stem cells are maintained and fed but also regulated and, when needed, differentiated.
    <figure>
    	<img src="images/niches1.png" alt=""/>
    	<figcaption></figcaption>
    </figure>
	<h5> Stem cells maintain </h3>
<p>In the basis of the intestinal gland, there is expression of Wnt in order to make proliferate multipotent stem cells and diffrenciation. But BMP-4 is also expressed, in order to regulate the differenciation because cells there are not  supposed to differentiate  to much.<p>
    <figure>
    	<img src="images/niches2.png" alt=""/>
    	<figcaption></figcaption>
    </figure>
	<h5 id="differentiation">Differentiation </h5>
<p> The low expression of WNT in the middle and high region allow NOTCH to differentiate stem cells into differentiated cells.</p>
    <h3>Differentiation</h3>

<p>
<br/>Stem cells are undiferenciated cells, able to replicate and renew indefinetly, and to differenciate into a specialised cell .
Generaly, the mitosis of a stem cell create one other stem cell and one progenetive cell who's going to differenciate into a specialised cell. So the stem cell's number remain constant.<p>
    <figure>
    	<img src="" alt=""/>
    	<figcaption></figcaption>
    </figure>
<p>In normal time, stem cells doesn't replicate much, just enough in order to keep the cell's population constant. But, after an injury, stem cells are activated (by the unknow "injury signal") and start replicate verry fast, in order to provide enough cells to fix the injury. that's why stem cell's are verry important for regeneration.</p>
    <h3>References</h3>
    <ul>
    	<li>Bipasha Bose, "Past, present and future of Stem Cells in Regenerative Medicine, after 2011</li>
    </ul>
    <ul>
    	<li>Camille Bismuth, "Les cellules souches chez l’adulte. Applications possibles en medecine veterinaire", 2008</li>
    </ul>
<?php include("comentss.php"); ?>
    <br/><br/>
    </div>
    <br/><br/><br/><br/><br/><br/> 
		</section>
		<?php include("footer.php"); ?>
	</div>
    </body>
</html>
