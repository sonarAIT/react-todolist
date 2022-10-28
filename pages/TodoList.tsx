import React from "react";
import type { NextComponentType } from "next";
import { useRecoilValue } from "recoil";
import Grid from "@mui/material/Grid";

import { Todo } from "@prisma/client";
import TodoCard from "./TodoCard";
import { todoAtom } from "./atom/todoAtom";

const _TodoList: NextComponentType = () => {
    console.log("TodoList");
    const todoList = useRecoilValue<Array<Todo>>(todoAtom);

    return (
        <Grid container justifyContent="center">
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

const TodoList = React.memo(_TodoList);
export default TodoList;
