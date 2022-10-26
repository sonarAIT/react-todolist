import type { NextComponentType, NextPageContext } from "next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export type Todo = {
    id: number;
    taskName: string;
    taskDetail: string;
    date: string;
};

type TodoCardProps = {
    todo: Todo;
};

const TodoCard: NextComponentType<NextPageContext, {}, TodoCardProps> = (
    props: TodoCardProps
) => {
    const doDelete = () => {
        console.log("delete");
    };

    return (
        <Grid item xs={6}>
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

export default TodoCard;
