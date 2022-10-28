import { atom } from "recoil";
import type { Todo } from "@prisma/client";

export const todoAtom = atom<Todo[]>({
    key: "todoAtom",
    default: [],
});
