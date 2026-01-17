export interface IPost {
    id: number;
    name: string;
    description: string;
    img: string | null;
    userId: number;
    tags:string[];
    likes:number[],
    comments:string[]
}
export interface likedPost{
    name: string;
    id: number;
    userId: number;
    description: string;
    img: string | null;
}
export interface ITags {
    id:number,
    name:string
}
export type Icomment = {
    id: number;
    userId: number;
    postId: number;
    body: string;
    createdAt: Date;
}
export interface postCreate{
    name: string;
    description: string;
    img: string | null;

}