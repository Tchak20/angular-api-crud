export interface ICocktail {
    createdAt?: string
    deletedAt?: null|string
    description: string
    id: number
    nom: string
    recette: string
    updatedAt?: string
    user_id: number
}

export interface ISingleCocktail {
    data: ICocktail
}

export interface IDataCocktail {
    data: ICocktail[]
}