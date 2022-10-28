import React from "react";
import type { NextComponentType, NextPageContext } from "next";
import { useSetRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import { Todo, todoAtom } from "./atom/todoAtom";
import { MOCK_TODOS_URL } from "./index";

type TodoCardProps = {
    todo: Todo;
};

const _TodoCard: NextComponentType<NextPageContext, {}, TodoCardProps> = (
    props: TodoCardProps
) => {
    console.log("TodoCard");
    const setTodoList = useSetRecoilState<Todo[]>(todoAtom);

    const doDelete = async () => {
        axios.delete(MOCK_TODOS_URL + props.todo.id).then((res) => {
            setTodoList((oldTodoList) => {
                return oldTodoList.filter((todo) => todo.id !== props.todo.id);
            });
        });
    };

    return (
        <Grid item xs={5.9}>
            <Card>
                <CardContent>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                component="div"
                                gutterBottom
                            >
                                {props.todo.taskName}
                            </Typography>

                            <Typography color="text.secondary" sx={{ mb: 1 }}>
                                {props.todo.date}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body2">
                                {props.todo.taskDetail}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions disableSpacing>
                    <Grid container justifyContent="right">
                        <IconButton onClick={doDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
};

const TodoCard = React.memo(_TodoCard);
export default TodoCard;
