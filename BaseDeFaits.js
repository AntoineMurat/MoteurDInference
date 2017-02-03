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

	respecte(si){
		for (var condition of si){

			// Si on n'a pas la condition :
			if (! this.aFait(condition)){
				return false
			}

		}

		return true
	}
}

module.exports = BaseDeFaits