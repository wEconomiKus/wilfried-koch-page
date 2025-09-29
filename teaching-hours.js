document.addEventListener( "DOMContentLoaded", ( ) => {
	let totalHours = 0;

	document.querySelectorAll("#teaching li").forEach(li => {
		const matches = li.textContent.match( /(\d+(?:\.\d+)?)h/g );
		if (matches)
		{
			matches.forEach(m => {
				totalHours += parseFloat( m.replace( "h", "" ) );
			});
		}
	});

	const lang = document.documentElement.lang; // "fr" or "en"

	const summary = document.createElement( "p" );
	summary.style.fontWeight = "bold";
	summary.style.marginTop = "1rem";

	if (lang === "fr")
	{
		summary.textContent = `Total d'heures enseignées : ${totalHours} heures`;
	}
	else
	{
		summary.textContent = `Total teaching hours: ${totalHours} hours`;
	}

	document.getElementById( "teaching" ).appendChild( summary );
});