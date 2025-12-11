import { IPost } from "../postCard/types";

export interface IProbs{
    setFilteredPosts: (posts:IPost[]) => void
}