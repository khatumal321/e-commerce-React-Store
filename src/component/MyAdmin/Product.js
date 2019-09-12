import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { MDBTooltip, MDBBtn, MDBCard } from "mdbreact";
import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../../App.css'
import MyAdmin from './MyAdmin'
import firebaseApp from './../../Config/Firebase/Firebase'
export default class OutlinedTextFields extends React.Component {
    constructor() {
        super()
        this.state = {
            productname: "",
            productprice: "",
            productimage: "",
            productdescription: "",

        }
        this.AddProducts = this.AddProducts.bind(this)
    }
    AddProducts=()=>{
        firebaseApp.firestore().collection("Products").add(this.state).then(()=>console.log("successfull"))
        alert("working")
    }



    async imageUpload(e) {
        let fileName = e.target.files[0].name
        console.log(fileName)
        let ref = firebaseApp.storage().ref('/').child(`images/${fileName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url);
            this.setState({
                productimage: url
            })
        });
    }
    onchange(e){
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <MyAdmin />
                <MDBCard className="w-100">
                    <Paper style={{ width: '40%', margin: '40px', marginLeft: '30%' }}>
                        <center> <h1>Add Product</h1></center>
                        <form className='form' noValidate autoComplete="off">
                            <TextField
                                id="outlined-with-placeholder"
                                label="Add Name"
                                placeholder="Name"
                                style={{ width: '100%' }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onchange.bind(this)}
                                name = "productname"
                            /><br />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Add Description"
                                placeholder="Description"
                                style={{ width: '100%' }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onchange.bind(this)}
                                name = "productdescription"
                            /><br />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Add Price"
                                placeholder="Price"
                                style={{ width: '100%' }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onchange.bind(this)}
                                name = "productprice"
                            /><br />
                            {/* <TextField
                                id="outlined-with-placeholder"
                                label="Add Category"
                                placeholder="Category"
                                style={{ width: '100%' }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onchange.bind(this)}
                                name = "productdescription"
                            /><br /> */}
                            <TextField
                                id="outlined-with-placeholder"
                                type="file"
                                style={{ width: '100%' }}
                                margin="normal"
                                variant="outlined"
                                onChange={this.imageUpload.bind(this)}
                                name = "productimage"
                            /><br />
                            <MDBBtn color="primary" size="sm" onClick={this.AddProducts}>
                                Add Product
                    </MDBBtn>
                        </form>
                    </Paper>
                </MDBCard>
            </div>
        );
    }
}
