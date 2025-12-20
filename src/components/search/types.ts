import { IPost } from "../../shared/dbTypes";

export interface IProbs{
    setFilteredPosts: (posts:IPost[]) => void
}