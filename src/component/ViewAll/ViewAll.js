import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import Appbar from '../Appbar/Appbar'
import { AppBar } from "@material-ui/core";



class eCommercePage extends React.Component {
  constructor() {
    super()
    this.state = {
      myCard: []
    }
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('mycart')))
      this.setState({
        myCard: JSON.parse(localStorage.getItem('mycart')),
      })
  }
  state = {
    data: [
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
        title: "iPhone",
        subTitle: "Apple",
        color: "White",
        price: "800",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg",
        title: "Headphones",
        subTitle: "Sony",
        color: "Red",
        price: "200",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg",
        title: "iPad Pro",
        subTitle: "Apple",
        color: "Gold",
        price: "600",
        qty: "1"
      },
    ],
    columns: [
      {
        label: '',
        field: 'img',
      },
      {
        label: <strong>Product</strong>,
        field: 'product'
      },
      {
        label: <strong>Color</strong>,
        field: 'color'
      },
      {
        label: <strong>Price</strong>,
        field: 'price'
      },
      {
        label: <strong>QTY</strong>,
        field: 'qty'
      },
      {
        label: <strong>Amount</strong>,
        field: 'amount'
      },
      {
        label: '',
        field: 'button'
      }
    ]
  }




  render() {
    let { myCard } = this.state;
    console.log(this.props.location.state.data);
    return (
      <div>
        <Appbar myCard={this.state.myCard} path={this.props} />
        <div>
          {
            this.props.location.state.data.map(val => {
              return <div style={{display: 'inline-block', margin: '40px'}}>
                <MDBRow className="my-2" center>
                <MDBCard className="w-100">
                  <MDBCardBody>
                    <MDBTable className="product-table">
                      <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" />
                        <MDBTableBody />
                        <img src={val.image} alt="" width='200px' className="img-fluid z-depth-0" />
                        <h5 className="mt-3" key={new Date().getDate + 1}><strong>{val.name}</strong></h5>
                        <p key={new
                          Date().getDate} className="text-muted">{val.count}</p>
                        {val.price}
                        <MDBInput type="number" className="form-control"  style={{ width: "100px" }} />
                        <strong>${val.price}</strong>
                        <MDBTooltip placement="top">
                          <MDBBtn color="primary" size="sm">
                            X
                          </MDBBtn>
                          <div>Remove item</div>
                        </MDBTooltip>
                      </MDBTable>
                    </MDBCardBody>
                  </MDBCard>
                </MDBRow>
              </div>
            })
          }
        </div>
      </div>

    )


    // console.log(this.props.location.state,4567)
    // return (
    //   <div>
    //     <Appbar path={this.props} myCard={this.state.myCard} />
    //     <div style={{ marginTop: '80px' }}>
    //       <MDBRow className="my-2" center>
    //         <MDBCard className="w-100">
    //           <MDBCardBody>
    //             <MDBTable className="product-table">
    //               <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" />
    //               <MDBTableBody />
    //             </MDBTable>
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBRow>
    //     </div>

    //     {/* {
    //       this.props.location.state.data.map(val=>{
    //         return <h1>{val.name}</h1>
    //       })
    //     } */}
    //   </div>

    // );
  }
}

export default eCommercePage;