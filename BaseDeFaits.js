var TypeNegation = require(__dirname+"/TypeNegation")

class BaseDeFaits {

	constructor(faits = []){
		this.faits = faits
	}

	ajouterFait(fait){
		this.faits.push(fait)
	}

	aFait(fait){
		for (var faitConnu of this.faits){
			if (
					faitConnu.libelle == fait.libelle 
				&& 
					faitConnu.negation == fait.negation
			) {
				return true
			}
		}
		return false
	}

	respecte(si, typeNegation){

		// S'il n'y a pas de négation, on vérifie que les faits sont identiques.

		if (typeNegation == TypeNegation.AUCUNE){

			for (var condition of si){
				// Si on n'a pas la condition :
				if (! this.aFait(condition)){
					return false
				}

			}

			return true

		}

		// Si la négation est dite absente, une règle absente est dite fausse.

		if (typeNegation == TypeNegation.ABSENCE){

			for (var condition of si){

				// Une condition négation doit être présente ou son opposée absente
				if (condition.negation){
					if (!this.aFait(condition) || this.aFait(fait.negation())){
						return false
					}


				} else {
					if (! this.aFait(condition)){
						return false
					}
				}

			}

			return true

		}

		// 

	}
}

module.exports = BaseDeFaits