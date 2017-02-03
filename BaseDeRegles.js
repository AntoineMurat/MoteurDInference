class BaseDeRegles {

	constructor(regles = [], typeNegation){
		this.regles = regles
		this.typeNegation = typeNegation
	}

	ajouterRegle(regle){
		this.regles.push(regle)
	}
}

module.exports = BaseDeRegles