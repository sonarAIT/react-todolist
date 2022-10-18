import type { NextComponentType } from "next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface TodoForm {
    taskName: string;
    taskDetail: string;
}

const TodoInput: NextComponentType = () => {
    const isValid: SubmitHandler<TodoForm> = (data: TodoForm) => {
        console.log(data);
    };
    const isInValid: SubmitErrorHandler<TodoForm> = (errors: any) => {
        console.log(errors);
        console.log("Fail Login");
    };
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
                        <form
                            onSubmit={handleSubmit(isValid, isInValid)}
                        >
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
                                        helperText={errors.taskName? errors.taskName.message : ""}
                                        id="task-name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <InputLabel htmlFor="task-detail">
                                        Task Detail
                                    </InputLabel>
                                    <TextField
                                        {...register("taskDetail", {
                                        })}
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

export default TodoInput;
