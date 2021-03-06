var icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// SELEZIONE DEGLI ELEMENTI UTILI 
let iconsCont = document.getElementById("icons-container");

// STAMPA ELEMENTI IN PAGINA
// for (let i = 0; i < icons.length; i++) {
// 	const {name, prefix, type, family, color} = icons[i];

// 	iconsCont.innerHTML += `
// 		<div class="icon-box">
// 			<i class="${family} ${prefix}${name}"></i>
// 			<span>${name}</span>
// 		</div>
// 	`
// }

// STAMPA ELEMENTI IN PAGINA
icons.forEach((icon) => {

	// VARIABILE USATA PER IMPOSTARE IL COLORE 
	let colorClass = '';

	
	// IMPOSTO COLORE ICONE 
	// Se la propiet?? type dell??oggetto ?? animal, il colore dell'icona sar?? arancione 
	if(icon.type === "animal" ) {
		colorClass = "orange-icon";
		
	} else if (icon.type === "vegetable") /*Se la propiet?? type dell??oggetto ?? vegetable, il colore dell'icona sar?? verde*/ {
		colorClass = "green-icon";
	
	} else /*In tutti gli altri casi l'icona sar?? di colore blu*/ {
		colorClass = "blue-icon";
	}

	iconsCont.innerHTML += `
		<div class="icon-box">
			<i class="${colorClass} ${icon.family} ${icon.prefix}${icon.name}"></i>
			<span style="text-transform:uppercase">${icon.name}</span>
		</div>
	`;
});


