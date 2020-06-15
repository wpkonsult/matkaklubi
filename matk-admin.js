// compile the template
var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
// execute the compiled template and print the output to the console
console.log(template({ doesWhat: "rokib!" }));

const matkad = [
	{
		nimi: 'Kanuumatk Võhandul',
		kuupaev: new Date(2020, 06, 10),
		pilt: './images/matk.png',
		matkaleht: 'matk1.php?id=1',
		lyhikirjeldus: 'qpowieurpqoiweuropiu qwoeiur qowpie rqowie ropqiwu eroqi ewrqlwöe rölqwe rölqkjwe rölqjw eröljqwerö'
	},
	{
		nimi: 'Rabamatk Laeva rabas',
		kuupaev: new Date(2020, 08, 12),
		pilt: './images/golfivaljak.jpg',
		matkaleht: 'matk1.php?id=2',
		lyhikirjeldus: 'asödlkfaskhfalksdf lkashdf lkas dflkasdflka sdflka sdflkasdlfhasdlfkjhasld fasdf. Asdlfkjasdlfjasld'
	},
	{
		nimi: 'Süstaga ümber Hiiumaa',
		kuupaev: new Date(2020, 10, 10),
		pilt: './images/systamatk.jpg',
		matkaleht: 'matk1.php?id=3',
		lyhikirjeldus: 'öflajsdfölkasdf asdflökjasdölfjasö dlfaslödf. afaölksdjföalkjsdf löasdfölkjasd flökjasdf'
	},
];


var matkKaar = Handlebars.compile(
<div class="card">
<h5 class="card-header">Featured</h5>
<div class="card-body">
	<h5 class="card-title">Special title treatment</h5>
	<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
	<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
);