import React from 'react'
import Banner from '../Home/images/banner.jpg'
import Grid from '@material-ui/core/Grid'
import CarouselPage from '../Slider/Silder'
import Chip from './Chip/Chip';
import Cards from './Cards/Cards'
import Image1 from './Cards/cardsPic/image.jpg'
import Image2 from './Cards/cardsPic/image2.jpg'
import Image3 from './Cards/cardsPic/image3.jpg'
import Image4 from './Cards/cardsPic/image4.jpg'
import Image5 from './Cards/cardsPic/image5.jpg'
import Appbar from '../../component/Appbar/Appbar'
import firebase from '../../Config/Firebase/Firebase'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            myCard: [],
            products:[]
        }
    }
    componentDidMount() {
        if(JSON.parse(localStorage.getItem('mycart')))
        this.setState({
            myCard: JSON.parse(localStorage.getItem('mycart')),
        })
        let { products } = this.state
        firebase.firestore().collection("Products").get()
            .then(myCard => {
                myCard.forEach(doc => {
                    let getData = doc.data()
                    products.push(getData)
                    this.setState({
                        products: products
                    })
                })

            })
        }

    render() {
        return (
            <div>
                <Appbar myCard={this.state.myCard} path={this.props}/>
                <CarouselPage />
                <Grid container justify='center' >
                    <Grid item lg={8}>
                        <img
                            style={{ height: '100px', backgroundSize: 'center', backgroundPosition: 'cover', margin: '20px' }}
                            src={Banner}
                            alt='laptop-store'
                            width='100%'
                        />
                    </Grid>
                </Grid>
                <Chip />
                {
             this.state.products.map((val,i)=>{
             return(
                <Cards
                path={this.props}
                image={val.productimage}
                name={val.productname}
                priceValue={val.productprice}
                text={val.productdescription}
                />
             )
             })

                }
               {/* <Cards 
                path={this.props}
                image={Image2} 
                name='hp laptop5' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image4} 
                name='hp laptop4' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                 <Cards 
                path={this.props}
                image={Image5} 
                name='Lenovo ThinkPad'
                priceValue='Rs. 24,699'
                text='Tuptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
                <Cards 
                path={this.props}
                image={Image3} 
                name='hp laptop3' 
                priceValue='PKR 241,000.00'
                text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.' />
             */}
            </div>
        )
    }
}