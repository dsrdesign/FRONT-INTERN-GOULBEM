export interface IUserLogin {
     token: string,
     responsable: {
          nomUtilisateur: string,
          poste: string
     },
     statusCode: number
}