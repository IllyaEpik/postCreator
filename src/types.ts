export interface IPost{
        title:string,
        image:string,
        avatar:string,
        description:string,
        likes:number,
        tags: number[]
    }
export interface IProbs{
    post:IPost,
    tags:string[]
}