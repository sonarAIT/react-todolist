import { atom, useSetRecoilState } from "recoil";

export type Todo = {
    id: number;
    taskName: string;
    taskDetail: string;
    date: string;
};

export const todoAtom = atom<Todo[]>({
    key: "todoAtom",
    default: [],
});
