import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {MDBTooltip, MDBBtn ,MDBCard} from "mdbreact";
import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../../App.css'
import MyAdmin from './MyAdmin'

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%'
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Product Name',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <MyAdmin/>
            <MDBCard className="w-100">
                <Paper  className={classes.root} style={{width: '40%', margin: '40px', marginLeft: '30%'}}>
            <center> <h1>Add Product</h1></center>
            <form className={classes.container} className='form' noValidate autoComplete="off">
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /><br />
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /><br />
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /><br />
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /><br />
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /><br />
                    <MDBBtn color="primary" size="sm">
                        Add Product
                    </MDBBtn>
    </form>
    </Paper>
    </MDBCard>
        </div>
    );
}