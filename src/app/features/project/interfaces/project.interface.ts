export interface IListOfProject {
     data: IProjet[],
     message: string,
};

export interface IProjet {
     idProjet: number,
     nom: string,
     description: string,
     dureeProjet: number,
     createAt: Date,
     updateAt: Date,
     idResponsable: number,
};

