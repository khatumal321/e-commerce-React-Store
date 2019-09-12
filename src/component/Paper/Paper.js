import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '20px',
        width: '200px',
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div style={{display: 'inline-block'}}>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Users
        </Typography>
                <Typography component="p">
                    33
        </Typography>
            </Paper>
        </div>
    );
}