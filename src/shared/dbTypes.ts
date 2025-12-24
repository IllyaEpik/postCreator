export interface IPost {
    id: number;
    name: string;
    description: string;
    img: string | null;
    userId: number;
    tags:string[];
    likes:number,
    comments:string[]
}
export interface ITags {
    id:number,
    name:string
}