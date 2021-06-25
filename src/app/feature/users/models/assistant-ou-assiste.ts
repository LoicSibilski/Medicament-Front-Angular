export class AssistantOuAssiste {
    public compteId : string;
    public utilisateurId : string;
    public nom : string;
    public prenom : string;
    public isAssistant : boolean;

    constructor(
        compteId : string, utilisateurId : string, nom : string, prenom : string, isAssistant : boolean) {
            this.compteId = compteId;
            this.utilisateurId = utilisateurId;
            this.nom = nom;
            this.prenom = prenom;
            this.isAssistant = isAssistant;
    }
}
