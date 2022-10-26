import type { NextComponentType } from "next";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import TodoCard from "./TodoCard";
import { Todo } from "./TodoCard";

const TodoList: NextComponentType = () => {
    const [todoList, setTodoList] = useState<Array<Todo>>([
        {
            id: 1,
            taskName: "ウホウホミッドナイト",
            taskDetail: "俺はもうウホウホすることに疲れた。",
            date: "2021-10-10",
        },
    ]);

    return (
        <Grid container justifyContent="center">
            <Grid item sx={{ mt: 2 }} xs={11}>
                {todoList.map((todo: Todo) => {
                    return <TodoCard key={todo.id} todo={todo} />;
                })}
            </Grid>
        </Grid>
    );
};

export default TodoList;
