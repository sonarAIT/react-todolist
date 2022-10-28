import React, { useCallback } from "react";
import type { NextComponentType } from "next";
import axios, { AxiosResponse } from "axios";
import { useSetRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

import { Todo, todoAtom } from "./atom/todoAtom";
import { MOCK_TODOS_URL } from "./index";

type TodoForm = {
    taskName: string;
    taskDetail: string;
};

type NewTodo = {
    taskName: string;
    taskDetail: string;
    date: string;
};

const _TodoInput: NextComponentType = () => {
    console.log("TodoInput");
    const setTodoList = useSetRecoilState<Todo[]>(todoAtom);

    const isValid: SubmitHandler<TodoForm> = useCallback(async (data: TodoForm) => {
        const newTodo: NewTodo = {
            taskName: data.taskName,
            taskDetail: data.taskDetail,
            date: new Date().toLocaleString(),
        };
        axios
            .post(MOCK_TODOS_URL, newTodo)
            .then((res: AxiosResponse<Todo>) => {
                setTodoList((oldTodoList) => {
                    return oldTodoList.concat(res.data);
                });
            });
    }, [setTodoList]);

    const isInValid: SubmitErrorHandler<TodoForm> = useCallback((errors: any) => {
        console.log(errors);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TodoForm>();

    return (
        <Grid container justifyContent="center">
            <Grid item xs={11}>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit(isValid, isInValid)}>
                            <Grid container rowSpacing={2}>
                                <Grid item xs={12}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Input Your Todo
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <InputLabel htmlFor="task-name">
                                        Task Name
                                    </InputLabel>
                                    <TextField
                                        {...register("taskName", {
                                            required: "Input Task Name",
                                            minLength: {
                                                value: 1,
                                                message: "Task Name is empty",
                                            },
                                        })}
                                        error={errors.taskName ? true : false}
                                        helperText={
                                            errors.taskName
                                                ? errors.taskName.message
                                                : ""
                                        }
                                        id="task-name"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <InputLabel htmlFor="task-detail">
                                        Task Detail
                                    </InputLabel>
                                    <TextField
                                        {...register("taskDetail", {})}
                                        id="task-detail"
                                        multiline
                                        rows={4}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container justifyContent="right">
                                        <Button type="submit">Submit</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

const TodoInput = React.memo(_TodoInput);
export default TodoInput;
