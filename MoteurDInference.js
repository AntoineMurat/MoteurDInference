var BaseDeFaits = require(__dirname+"/BaseDeFaits")
var BaseDeRegles = require(__dirname+"/BaseDeRegles")
var TypeNegation = require(__dirname+"/TypeNegation")

class MoteurDInference {
	constructor(typeNegation = TypeNegation.AUCUNE){
		this.baseDeFaits = new BaseDeFaits()
		this.baseDeRegles = new BaseDeRegles([], typeNegation)
		this.typeNegation = typeNegation
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

			if (this.baseDeFaits.respecte(regle.si, this.typeNegation)){
				for (var nouveauFait of regle.alors){
					this.baseDeFaits.ajouterFait(nouveauFait)
					this.faitsDeduits.push(nouveauFait)
				}
			}
		}
	}
}

module.exports = MoteurDInference