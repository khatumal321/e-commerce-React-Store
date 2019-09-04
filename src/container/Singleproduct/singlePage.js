import React from 'react';
import Appbar from '../../component/Appbar/Appbar'
import Paper from '@material-ui/core/Paper';
import SimpleRating from '../../component/SimpleRating/Routing';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';

class CardExample extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCard: []
        }
    }
    myCard = () => {
        let { count, myCard } = this.state;
        let cart = {
            image: this.props.location.state.url,
            name: this.props.location.state.title,
            price: this.props.location.state.price,
            count: count
        }
        myCard.push(cart)
        console.log(cart)
        this.setState({
            myCard: myCard
        })
        localStorage.setItem("mycart", JSON.stringify(myCard))
    }
    componentDidMount() {
        if(JSON.parse(localStorage.getItem('mycart')))
        this.setState({
            myCard: JSON.parse(localStorage.getItem('mycart')),
        })
    }
    render() {
        let { count, myCard } = this.state;
        return (
            <div>
            <Appbar myCard={myCard}/>
            <div style={{ margin: "20px" }}>
                <Paper style={{ padding: 20, display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>
                        <img src={this.props.location.state.url} width="500" />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <h2>{this.props.location.state.title}</h2>
                        <SimpleRating />
                        <p>{this.props.location.state.description}</p>
                        <h3 style={{ color: "gray" }}>Rs: {this.props.location.state.price}</h3>
                        <h3>Quantity:</h3>
                        <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "30%" }}>
                            <button onClick={() => this.setState({ count: count > 0 ? count - 1 : 0 })} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                            <h5 style={{ color: "gray", marginTop: "2px", width: "10% ", textAlign: "center" }}>{count}</h5>
                            <button onClick={() => this.setState({ count: count + 1 })} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                        </div>
                        <Button size="large" onClick={()=>this.myCard()} style={{ color: "white", backgroundColor: "gray", marginTop: "30px" }}>
                            <MdShoppingCart />Add to Cart
                    </Button>
                    </div>
                </Paper>
            </div>
            </div>
        )
    }
}

export default CardExample;