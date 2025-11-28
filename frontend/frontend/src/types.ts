export interface IPost{
        title:string,
        image:string,
        avatar:string,
        description:string,
        likes:number,
        tags: string[]
    }
export interface IProbs{
    post:IPost
}