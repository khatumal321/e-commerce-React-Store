import React from "react";
import SimpleRating from '../../../component/SimpleRating/Routing';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from
  "mdbreact";
const eCommercePage = (props) => {
  return (
    <MDBCard onClick={()=>props.path.history.push("/Singleproduct",{
      url:props.image,
      title: props.name,
      price: props.priceValue,
      description: props.text
    })} className="m-2" style={{ width: "246px", display: "inline-block", margin: "20px" }} cascade ecommerce wide>
      <MDBCardImage cascade top src={props.image}
        waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Laptop
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>{props.name}</strong></a>
        </MDBCardTitle>
       <SimpleRating />
        <MDBCardText>
        {props.text}
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">{props.priceValue}</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="black" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                <MDBIcon icon="shopping-cart" />
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="blue" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                <MDBIcon icon="share-alt" />
              </MDBBtn>
              <div>Share</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                <MDBIcon icon="heart" className="red-text" />
              </MDBBtn>
              <div>Added to Wishlist</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}

export default eCommercePage;
