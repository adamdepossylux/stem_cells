-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 28 Juillet 2016 à 20:44
-- Version du serveur :  10.1.13-MariaDB
-- Version de PHP :  5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `articles`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `Auteur` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `Articles` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `articles`
--

INSERT INTO `articles` (`id`, `nom`, `Auteur`, `Date`, `Articles`) VALUES
(1, 'Regeneration in animals', 'Raphaël Garnaud', '2016-07-28', '    	<p>All animals are able to regenerate, but on different levels. After a modest injury (a bruise or a skin wound), you would expect your body to nearly completely repair the damaged tissue over a period one or two weeks : that’s regeneration. But a severe injury, like the loss of an arm, you normally wouldn’t expect much of your regenerative capacities, we accept that the arm is lost forever and look for engineers that produce an artificial device, a prosthesis, to replace the missing body part. The situation is quite different, and much more promising, for salamanders and planarian flatworms that have incredible regeneration skills. Below we will describe how they do it. This information may be helpful in determining how the regeneration process could be manipulated in humans.</p>\r\n	<br/>\r\n    	<p><strong>Problem: To what extent animals as planarian and salamanders are able to regenerate themselves ?</strong/></p>\r\n<br/>\r\n\r\n    			<h3>Generation of body parts in planarian flatworms</h3>\r\n    \r\n\r\n    	<p>Planarians are invertebrate flatworms that have the unbelievable ability to regenerate any part of their body. The most extraordinary example is the full regeneration of head structures after decapitation of the animal. More surprisingly, as a cherry on the cake, the animal also regains its memory.</p>\r\n    \r\n	<p>The experience begin with an <span id="amputation">amputation</span>, in this picture decapitation, it is the first step of the process in order to understand mechanisms of planarian regeneration. Indeed we will see how planaria’s body reacts.</p>\r\n	<p>The accumulation of stem cells on the site of the injury forms what we call a <span id="blastema">blastema</span>. It is this cluster of cells that will reproduce, regenerate, the missing body part.</p>\r\n	<p>Stem cells of the blastema receive different kind of signals from nerve cells, provided by hormones. The same neurotransmitter is required in both processes but in order to <span id="regeneration_control">differentiate or to proliferate</span> different hormones are used. The one shown on the picture in blue induce an increase in the number of stem cells wheras the one in red order to the stem cell what lineage to adopt (turning into muscle, vasculature, nerve, epithelium, connective tissue, or others): what precursor cells to become. There are many different hormones such as serotonin and dopamine, some of them are produced by muscle cells.</p>\r\n    	<figure>\r\n    		<img src="images/planeria2.00.jpg" alt="hormone''s action" title="Reference: Tal Shomrat and Michael Levin, Tufts University ; Francesc Cebria, University of Barcelona"/>\r\n    	<figcaption>Figure 4: neurotransmitters (black, blue and red circles) from nerve cells (nc) instruct either to increase stem cells (sc) proliferation or differentiation into precusor cells (pc)</figcaption>\r\n	</figure>\r\n\r\n    \r\n	<p>As a conclusion, the functioning of planarian regeneration can be recaped in this diagram.</p>\r\n    	<figure>\r\n    		<img src="images/conclusion.jpg"/>\r\n    	</figure>\r\n\r\n	<p>So, planarian flatworms seems to have a complete ability to regenerate themselves, even the head, but what about salamanders, can they regain memory as planarian ?</p>\r\n\r\n    			<h3>Regeneration of body parts in salamanders</h3>\r\n    \r\n	<p> Another exemple of animal with extraordinary regeneration capacity is the salamander. Salamender doesn''t regenerate their all body from a head like flatworms, but they can regenerate a member after an amputation.<p>\r\n    	<video src="videos/Cell regeneration in the salamander.mp4" controls poster="videos/salamander.jpg" max-width="100%" min-width="100%" title="References: Nadia Rosenthal" preload="metadata"></video>\r\n    <p> After an injury (partial or total loss of body structures) different process repair the injured zone, partially or totally.</p>\r\n\r\n    				<h4 id="inflammatory">Inflammatory response</h4>\r\n    	<p> The process begins with the inflammatory response where blood vessels dilate, allowing more blood to enter the injured zone. This in turn leads to an enhanced presence of white blood cells, neutrophils and lymphocytes, that enter the tissue and initiate the process of immune defense and tissue repair (figure 1). The ensuing inflammation is also responsable for the pain sensation, because macrophages produce chemical messengers that stimulate nociceptive nerves.</p>\r\n    	<figure>\r\n    		<img src="images/inflamation.jpg" alt="vasodilatation" title=""/>\r\n    		<figcaption></figcaption>\r\n	</figure>\r\n    	<p>Both innate and adapted immunity leads to elimination of micro-organism that have entered the wound.</p>\r\n    <h4 id="unknown">Stem cells recruitment</h4>\r\n    <p>The injury also causes the recruitment of Stem Cells, who are essential for the regeneration of the tissues.The mechanism responsible of Stem cell’s recruitment, globally referred to as the “injury signal” isn’t known yet, but may cytokines produced by the macrophages may play an important role (acting as chemo-attractants). Indeed, a studie performed by the Australian Regenerative Medecine Institute shows that the macrophages play a role in the regeneration of members for salamenders : they found that salamanders with macrophages being recruited into the injuried zone normally regenerate a new member in about one yearwhereas those that fail to recruit macrophages take much more longer to fully recover. Salamanders totally lacking macrophages do not regenerate at all; these animals just manage to heal the wound by covering the body part with a scar tissue.</p>\r\n    <figure>\r\n    	<img src="images/salamanderr.jpg" alt="salamender regeneration" title="Reference: Georgia Tech University"/>\r\n    	<figcaption>Figure 2: regeneration of a Salamander’s limb after an amputation</figcaption>\r\n	</figure>\r\n\r\n    <h3>Summary</h3>\r\n    \r\n\r\n    <p> After an <a href="#amputation">amputation</a>, through a <a href="#unknown"> process still to be elucidated</a> but involving infiltrated <a href="#inflammatory"> macrophages</a>, stem cells are attracted to the site of the injury. They form stem cells <a href="#blastema">cluster</a> which, through <a href="#regeneration_control">control by locally generated hormones</a>, will differentiate into the different missing organs</p>\r\n\r\n    <h3>References</h3>\r\n    <ul>\r\n    	<li>Alan H. CRUICKSHANK, André PARAF, Catherine ZILLER,<a href="http://www.universalis-edu.com/encyclopedie/regeneration-et-cicatrisation/"> « RÉGÉNÉRATION ET CICATRISATION »</a>, Encyclopædia Universalis [en ligne], consulté le 17 décembre 2015.URL</li>\r\n    	<li>Par R. FRANQUINET,<a href="references/serotonin.pdf"> « Role de la serotonine et des catecholamines dans la regeneration de la planaire Polycelis tenuis » </a>,1979</li>\r\n    	<li>Jessica N. Witchley, Mirjam Mayer Daniel E. Wagner Jared H. Owen and Peter W. Reddien, <a href="references/hormons.pdf">« Muscle Cells Provide Instructions for Planarian Regeneration »</a>, August 15, 2013</li>\r\n    	<li>Francesc Cebrià, <a href="references/transmeteurs.pdf">« Regenerating the central nervous system: How easy for planarians! »</a>, January 2008</li>\r\n    	<li>Tal Shomrat, and Michael Levin, <a href="references/planeria_head.pdf">« An Automated Training Paradigm Reveals Long-term Memory in Planaria and Its Persistence Through Head Regeneration »</a>, 2013.</li>\r\n<li>Brian Merchant <a href="http://motherboard.vice.com/blog/australian-scientists-think-salamander-like-human-limb-regeneration-is-possible">« Australian Scientists Think "Salamander-Like" Human Limb Regeneration Is Possible »</a>, 2013.</li>\r\n<li>Nadia Rosenthal <a href="http://www.hhmi.org/biointeractive/newt-limb-regeneration">« Potent Biology: St\r\nem Cells, Cloning, and Regeneration, Newt limb regeneration »</a>, 2006.</li>\r\n	</ul>');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
