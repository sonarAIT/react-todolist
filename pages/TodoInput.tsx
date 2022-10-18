import type { NextComponentType } from "next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoInput: NextComponentType = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={11}>
                <Card>
                    <CardContent>
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
                                    id="task-detail"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justifyContent="right">
                                    <Button>Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default TodoInput;
