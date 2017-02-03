class Fait {
	constructor(libelle, negation = false){
		this.libelle = libelle
		this.negation = negation
	}

	negation(){
		return {libelle : this.libelle, negation : !this.negation}
	}
}

module.exports = Fait