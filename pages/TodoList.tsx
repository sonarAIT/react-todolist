import React, { useEffect } from "react";
import type { NextComponentType } from "next";
import { useRecoilValue } from "recoil";
import axios from "axios";
import useSWR from "swr";
import Grid from "@mui/material/Grid";

import TodoCard from "./TodoCard";
import { Todo } from "./atom/todoAtom";
import { todoAtom } from "./atom/todoAtom";
import { MOCK_TODOS_URL } from "./index";

const _TodoList: NextComponentType = () => {
    console.log("TodoList");
    const fetcher = (url: string) =>
        axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(MOCK_TODOS_URL, fetcher);
    if (data === undefined) return <div>failed to load</div>;
    console.log(data);
    const todoList = data;
    // const todoList = useRecoilValue<Todo[]>(todoAtom);

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
