import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(1),
    },
}));

export default function Chips() {
    const classes = useStyles();

    function handleDelete() {
        alert('You clicked the delete icon.');
    }

    return (
        <div className={classes.root}>
            <Chip
                icon={<FaceIcon />}
                label="HP Laptops"
                onDelete={handleDelete}   
                className={classes.chip}
                color="gray"
            />

            <Chip
                icon={<FaceIcon />}
                label="Deal Daptops"
                onDelete={handleDelete}
                className={classes.chip}
                color="gray"
            />

            <Chip
                icon={<FaceIcon />}
                label="Apple"
                onDelete={handleDelete}
                className={classes.chip}
                color="gray"
            />

            <Chip
                icon={<FaceIcon />}
                label="lenovo"
                onDelete={handleDelete}
                className={classes.chip}
                color="gray"
            />
        </div>
    );
}