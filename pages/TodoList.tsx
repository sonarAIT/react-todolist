import type { NextComponentType } from "next";
import { useRecoilValue } from "recoil";
import Grid from "@mui/material/Grid";

import TodoCard from "./TodoCard";
import { Todo } from "./atom/todoAtom";
import { todoAtom } from "./atom/todoAtom";

const TodoList: NextComponentType = () => {
    const todoList = useRecoilValue<Todo[]>(todoAtom);

    return (
        <Grid container justifyContent="center" >
            <Grid item sx={{ mt: 2 }} xs={11}>
                <Grid container rowSpacing={2} justifyContent="space-between">
                    {todoList.map((todo: Todo) => {
                        return <TodoCard key={todo.id} todo={todo} />;
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TodoList;
