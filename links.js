const links =
{
	//Authors.
	lesage:			"https://www.spatial-econometrics.com",
	legallo:		"https://sites.google.com/site/legallopage/?pli=1",
	baumont:		"https://ledi.ube.fr/membres/catherine-baumont/",
	ertur:			"https://fr.wikipedia.org/wiki/Cem_Ertur",
	diallo:			"https://scholar.google.com/citations?user=zDHsSMUAAAAJ&hl=en",
	avoumatsodo:	"https://avoumatsodo.github.io",
	leunga:			"https://sites.google.com/view/isambertleunga/home",
	zongo:			"https://sites.google.com/view/hervezongo",
	aghion:			"https://www.college-de-france.fr/fr/chaire/philippe-aghion-economie-des-institutions-de-innovation-et-de-la-croissance-chaire-statutaire/biography",
	paquet:			"https://www.alainpaquet.uqam.ca",
	tientao:		"https://fr.linkedin.com/in/aligui-tientao-5b986a146",
	legros:			"https://ledi.ube.fr/membres/legros-diego/",
	schone:			"https://ledi.ube.fr/membres/katharina-schone/",
	behrens:		"https://sites.google.com/view/kristianbehrens/home",
	//Places.
	economie_en:	"https://economie.esg.uqam.ca/en/",
	economiefr:		"https://economie.esg.uqam.ca",
	esg_en:			"https://esg.uqam.ca/en/",
	esgfr:			"https://esg.uqam.ca",
	uqam_en:		"https://uqam.ca/en/information/about/",
	uqamfr:			"https://uqam.ca/en/information/about/",
	bourgogne:		"https://www.ube.fr",
	seminars:		"https://economie.esg.uqam.ca/activites/seminaires-departementaux-internes/",
	//Programs.
	eco930K:		"https://etudier.uqam.ca/cours?sigle=ECO930K",
	eco8025:		"https://etudier.uqam.ca/cours?sigle=ECO8025",
	eco5051:		"https://etudier.uqam.ca/cours?sigle=ECO5051",
	eco2023:		"https://etudier.uqam.ca/cours?sigle=ECO2023",
	eco3200:		"https://etudier.uqam.ca/cours?sigle=ECO3200",
	eco1273:		"https://etudier.uqam.ca/cours?sigle=ECO1273",
	eco4401:		"https://etudier.uqam.ca/cours?sigle=ECO4401",
	eco2400:		"https://etudier.uqam.ca/cours?sigle=ECO2400",
	master:			"https://etudier.uqam.ca/programme?code=3524",
	phd:			"https://etudier.uqam.ca/programme?code=3747",
	bac:			"https://etudier.uqam.ca/programme/baccalaureat-economique",
	certif:			"https://etudier.uqam.ca/programme?code=4614",
	degt:			"https://ufr-dsep.ube.fr/etudiant/stages-emplois/master-1-economie-gouvernance-des-territoires.html",
	//Publications.
	these:			"https://theses.fr/2007DIJOE006",
	ae:				"https://www.erudit.org/en/journals/ae/2019-v95-n4-ae05929/1076266ar/",
	restat:			"https://direct.mit.edu/rest/article-abstract/100/3/489/58463/Bank-Concentration-and-Schumpeterian-Growth-Theory?redirectedFrom=fulltext",
	sjpe:			"https://onlinelibrary.wiley.com/doi/10.1111/sjpe.12074",
	public:			"https://link.springer.com/article/10.1007/s11127-011-9811-1",
	jae2:			"https://onlinelibrary.wiley.com/doi/abs/10.1002/jae.1231",
	joeg:			"https://link.springer.com/article/10.1007/s10887-011-9067-0",
	sea:			"https://www.tandfonline.com/doi/abs/10.1080/17421770802353733",
	jae:			"https://onlinelibrary.wiley.com/doi/full/10.1002/jae.963",
	ars:			"https://link.springer.com/article/10.1007/s00168-006-0062-x",
	rd:				"https://regionetdeveloppement.univ-tln.fr/2005-numero-21/",
	gouvernement:	"https://www.finances.gouv.qc.ca/ministere/outils_services/consultations_publiques/communaute_universitaire_economique/propositions_ecart_de_richesse/Innovation_schumpeterienne_prosperite_durable.pdf",
	conf_en:		"https://esg.uqam.ca/conference/conference-innovation/index-en.html",
	translation_en:	"https://mitpress.mit.edu/9780262012638/the-economics-of-growth/",
	translation_fr:	"https://www.economica.fr/livre-l-economie-de-la-croissance-aghion-philippe-howitt-peter-c2x32210679",
	springer:		"https://link.springer.com/chapter/10.1007/978-3-642-03326-1_21",
	deboeck:		"https://www.cairn.info/politique-regionale-europeen--9782804149963-page-71.htm",
	wp202504:		"https://economie.esg.uqam.ca/wp-content/uploads/sites/54/2025/06/eco2025_04.pdf",
	wp201910:		"https://economie.esg.uqam.ca/wp-content/uploads/sites/54/2020/01/2019-10_docdt_eco.compressed.pdf",
	//other
	scholargoogle:	"https://scholar.google.com/citations?user=uWBf-04AAAAJ&hl=fr&oi=ao",
	researchgate:	"https://www.researchgate.net/profile/Wilfried-Koch-2",
	github:			"https://github.com/wEconomiKus",
	github_wPlot2D:	"https://github.com/wEconomiKus/wPlot2D",
	itch:			"https://wEconomiKus.itch.io",
	itch_wPlotd2D:	"https://weconomikus.itch.io/wplot2d"
}

function applyLinks( )
{
	for (const key in links)
	{
		document.querySelectorAll( `[data-link="${key}"]` ).forEach(el => { el.setAttribute( "href", links[key] ) } );
	}
}

document.addEventListener( "DOMContentLoaded", applyLinks );