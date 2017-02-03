var MoteurDInference = require(__dirname+"/MoteurDInference")
var Fait = require(__dirname+"/Fait")

var moteurDInference = new MoteurDInference()

moteurDInference.ajouterFait(new Fait("choux-fleurs", false))
moteurDInference.ajouterFait(new Fait("grosse-quantité", false))
moteurDInference.ajouterFait(new Fait("France", false))
moteurDInference.ajouterFait(new Fait("délai-très-court", false))

// R1
moteurDInference.ajouterRegle({
	si : [
		{libelle: "sacs", negation: false}
	], 
	alors : [
		{libelle: "container", negation: false}
	]
})

// R2
moteurDInference.ajouterRegle({
	si :[
		{libelle: "grosse-quantité", negation: false}
	], 
	alors : [
		{libelle: "container", negation: false}
	]
})
// R3
moteurDInference.ajouterRegle({
	si :[
		{libelle: "asperges", negation: false},
		{libelle: "moyenne-quantité", negation: false}
	], 
	alors :[
		{libelle: "cageots", negation: false}
	]
})
// R4
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "choux-fleurs", negation: false},
		{libelle: "petite-quantite", negation: false}
	], 
	alors : [
		{libelle: "cageots", negation: false}
	]
})
// R5
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "délai-très-court", negation: false}
	], 
	alors : [
		{libelle: "pressé", negation: false}
	]
})
// R6
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "délai-court", negation: false},
		{libelle: "fragile", negation: false}
	],
	alors : [
		{libelle: "pressé", negation: false}
	]
})
// R7
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "container", negation: false},
		{libelle: "hors-France", negation: false},
		{libelle: "pressé", negation: false}
	], 
	alors : [
		{libelle: "express", negation: false}
	]
})
// R8
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "container", negation: false},
		{libelle: "France", negation: false},
		{libelle: "préssé", negation: true}
	], 
	alors : [
		{libelle: "péniche", negation: false}
	]
})
// R9
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "container", negation: false},
		{libelle: "France", negation: false},
		{libelle: "pressé", negation: false}
	], 
	alors : [
		{libelle: "camion", negation: false}
	]
})
// R10
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "cageots", negation: false},
		{libelle: "hors-France", negation: false},
		{libelle: "fragile", negation: true}
	], 
	alors : [
		{libelle: "camion", negation: false}
	]
})
// R11
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "fragile", negation: false},
		{libelle: "hors-France", negation: false}
	], 
	alors : [
		{libelle: "avion", negation: false}
	]
})
// R12
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "asperges", negation: false},
		{libelle: "container", negation: true}
	], 
	alors : [
		{libelle: "fragile", negation: false}
	]
})
// R13
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "ramassage-automatique", negation: false}
	], 
	alors : [
		{libelle: "sacs", negation: false}
	]
})
// R14
moteurDInference.ajouterRegle({
	si :[ 
		{libelle: "cageots", negation: false}
	], 
	alors : [
		{libelle: "sacs", negation: true}
	]
})

moteurDInference.calculer()

console.log(moteurDInference.obtenirFaitsDeduits())