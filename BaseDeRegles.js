class BaseDeRegles {

	constructor(regles = []){
		this.regles = regles
	}

	ajouterRegle(regle){
		this.regles.push(regle)
	}
}

module.exports = BaseDeRegles