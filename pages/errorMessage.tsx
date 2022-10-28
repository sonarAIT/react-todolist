import React from "react";
import type { NextComponentType, NextPageContext } from "next";
import { Grid } from "@mui/material";

import { Todo } from "./atom/todoAtom";

type ErrorMessageProps = {
    data: Todo[] | undefined;
    error: any;
};

const _ErrorMessage: NextComponentType<
    NextPageContext,
    {},
    ErrorMessageProps
> = (props: ErrorMessageProps) => {
    console.log("ErrorMessage");

    return (
        <Grid container justifyContent="center">
            {props.error || !props.data ? (
                <Grid item sx={{ mt: 2 }} xs={11}>
                    {props.error && <div>failed to load</div>}
                    {!props.data && <div>loading...</div>}
                </Grid>
            ) : null}
        </Grid>
    );
};

const ErrorMessage = React.memo(_ErrorMessage);
export default ErrorMessage;
