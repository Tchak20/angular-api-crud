export interface IUser {
    id: number,
    nom: string,
    prenom: string,
    pseudo: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string
}

export interface ISingleUser {
    data: IUser
}

export interface IDataUser {
    data: IUser[]
}