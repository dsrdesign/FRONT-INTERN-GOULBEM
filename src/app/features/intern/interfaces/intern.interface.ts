
export interface IListInternsManager {
     data: IInternsManager[],
     message: string
};

export interface IInternsManager {
     idStagiaire: number,
     matriculeStagiaire: string,
     nom: string,
     prenom: string,
     linkedin: string,
     statut: string,
     debutStage: Date,
     finStage: Date,
     createAt: Date,
     updateAt: Date,
     idResponsable: number,
     codeDepartement: string
};

export interface IDetailIntern {
     data: IDataDetailIntern,
     message: string
};

export interface IDataDetailIntern {
     stagiaire: IIntern,
     projet: IProject[]
};

export interface IIntern {
     idStagiaire: 1,
     matriculeStagiaire: string,
     nom: string,
     prenom: string,
     linkedin: string,
     statut: string,
     debutStage: Date,
     finStage: Date,
     createAt: Date,
     updateAt: Date,
     idResponsable: number,
     codeDepartement: string,
     responsable: IManager,
     departement: IDepartment
     taches: Itache[]
};

export interface IManager {
     idResponsable: number,
     nom: string,
     prenom: string,
     poste: string,
     nomUtilisateur: string,
     motDePasse: string,
     createAt: Date,
     updateAt: Date,
     codeDepartement: string
};

export interface IDepartment {
     codeDepartement: string,
     nom: string,
     createAt: string,
     updateAt: Date
};

export interface Itache {
     idTache: number,
     description: string
     dureeTache: number,
     createAt: Date,
     updateAt: Date,
     idStagiaire: number,
     idProjet: number,
     projet: IProject
}


export interface IProject {
     idProjet: number,
     nom: string,
     description: string,
     dureeProjet: number,
     createAt: Date,
     updateAt: Date,
     idResponsable: number
};