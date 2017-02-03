var BaseDeFaits = require(__dirname+"/BaseDeFaits")
var BaseDeRegles = require(__dirname+"/BaseDeRegles")

class MoteurDInference {
	constructor(){
		this.baseDeFaits = new BaseDeFaits()
		this.baseDeRegles = new BaseDeRegles()
		this.faitsDeduits = []
	}

	ajouterFait(fait){
		this.baseDeFaits.ajouterFait(fait)
	}

	ajouterRegle(regle){
		this.baseDeRegles.ajouterRegle(regle)
	}

	obtenirFaitsDeduits(){
		return this.faitsDeduits
	}

	calculer(){
		for (var regle of this.baseDeRegles.regles){

			if (this.baseDeFaits.respecte(regle.si)){

				for (var nouveauFait of regle.alors){
					this.baseDeFaits.ajouterFait(nouveauFait)
					this.faitsDeduits.push(nouveauFait)
				}
			}
		}
	}
}

module.exports = MoteurDInference